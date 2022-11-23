import axios from 'axios';
import sinon from 'sinon';
import nock from 'nock';
import { startWebServer, stopWebServer } from '../entry-points/api/server';
import * as testHelpers from './test-helpers';

// Configuring file-level HTTP client with base URL will allow
// all the tests to approach with a shortened syntax
let axiosAPIClient;

beforeAll(async () => {
  process.env.JWT_TOKEN_SECRET = testHelpers.exampleSecret;
  // ️️️✅ Best Practice: Place the backend under test within the same process
  const apiConnection = await startWebServer();
  const axiosConfig = {
    baseURL: `http://127.0.0.1:${apiConnection.port}`,
    validateStatus: () => true, // Don't throw HTTP exceptions. Delegate to the tests to decide which error is acceptable
    headers: {
      // ️️️✅ Best Practice: Test like production, include real token to stretch the real authentication mechanism
      authorization: testHelpers.signValidTokenWithDefaultUser(),
    },
  };
  axiosAPIClient = axios.create(axiosConfig);

  // ️️️✅ Best Practice: Ensure that this component is isolated by preventing unknown calls
  nock.disableNetConnect();
  nock.enableNetConnect('127.0.0.1');
});

beforeEach(() => {
  // ️️️✅ Best Practice: Start each test with a clean slate
  nock.cleanAll();
  sinon.restore();

  nock('http://localhost/user/').get(`/1`).reply(200, {
    id: 1,
    name: 'John',
    terms: 45,
  });
});

afterAll(async () => {
  nock.enableNetConnect();
  stopWebServer();
});

// ️️️✅ Best Practice: Structure tests by routes and stories
describe('/api', () => {
  describe('POST /users/signup', () => {
    // ️️️✅ Best Practice: Check the response
    test('When adding a new valid user, Then should get back approval with 201 response', async () => {
      // Arrange
      const userToAdd = {
        email: 'mhrr@gml.com',
        firstName: 'Nir',
        lastName: 'Huri',
        createdAt: '2022-08-10',
        updatedAt: '2022-08-10',
        password: '12345',
        roleId: '2c389a72-038c-48fa-be73-1b28cda61b29',
      };

      // Act
      const receivedAPIResponse = await axiosAPIClient.post(
        '/users/signup',
        userToAdd
      );

      // Assert
      expect(receivedAPIResponse).toMatchObject({
        data: {
          id: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          email: expect.any(String),
          token: expect.any(String),
        },
      });
    });

    test('When trying to register with an existing email, it should return error with status code 409', async () => {
      const userToAdd = {
        email: 'mhrr@gml.com',
        firstName: 'Nir',
        lastName: 'Huri',
        createdAt: '2022-08-10',
        updatedAt: '2022-08-10',
        password: '12345',
        roleId: '2c389a72-038c-48fa-be73-1b28cda61b29',
      };

      const receivedAPIResponse = await axiosAPIClient.post(
        '/users/signup',
        userToAdd
      );

      expect(receivedAPIResponse.status).toBe(409);
    });
  });
});

export {};
