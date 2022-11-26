import axios from 'axios';
import sinon from 'sinon';
import nock from 'nock';
import { startWebServer, stopWebServer } from '../entry-points/api/server';
import * as testHelpers from './test-helpers';

// Configuring file-level HTTP client with base URL will allow
// all the tests to approach with a shortened syntax
let axiosAPIClient;

const generatedEmailAddress = testHelpers.generateRandomEmailAddress();

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
  describe('POST /users/signin', () => {
    // ️️️✅ Best Practice: Check the response
    test('When signing in with valid user the response should be 200 with the sidned user', async () => {
      // Arrange
      const userToAdd = {
        email: 'huri1@gmail.com',
        password: '12345',
      };

      // Act
      const receivedAPIResponse = await axiosAPIClient.post(
        '/users/signin',
        userToAdd
      );

      // Assert
      expect(receivedAPIResponse).toMatchObject({
        data: {
          id: expect.any(Number),
          firstName: expect.any(String),
          lastName: expect.any(String),
          fullName: expect.any(String),
          email: expect.any(String),
          roleType: expect.any(Number),
          roleTitle: expect.any(String),
          token: expect.any(String),
        },
      });
    });
  });
});

export {};
