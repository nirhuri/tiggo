"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sinon_1 = __importDefault(require("sinon"));
const nock_1 = __importDefault(require("nock"));
const server_1 = require("../entry-points/api/server");
const testHelpers = __importStar(require("./test-helpers"));
// Configuring file-level HTTP client with base URL will allow
// all the tests to approach with a shortened syntax
let axiosAPIClient;
beforeAll(async () => {
    process.env.JWT_TOKEN_SECRET = testHelpers.exampleSecret;
    // ️️️✅ Best Practice: Place the backend under test within the same process
    const apiConnection = await (0, server_1.startWebServer)();
    const axiosConfig = {
        baseURL: `http://127.0.0.1:${apiConnection.port}`,
        validateStatus: () => true,
        headers: {
            // ️️️✅ Best Practice: Test like production, include real token to stretch the real authentication mechanism
            authorization: testHelpers.signValidTokenWithDefaultUser(),
        },
    };
    axiosAPIClient = axios_1.default.create(axiosConfig);
    // ️️️✅ Best Practice: Ensure that this component is isolated by preventing unknown calls
    nock_1.default.disableNetConnect();
    nock_1.default.enableNetConnect('127.0.0.1');
});
beforeEach(() => {
    // ️️️✅ Best Practice: Start each test with a clean slate
    nock_1.default.cleanAll();
    sinon_1.default.restore();
    (0, nock_1.default)('http://localhost/user/').get(`/1`).reply(200, {
        id: 1,
        name: 'John',
        terms: 45,
    });
});
afterAll(async () => {
    nock_1.default.enableNetConnect();
    (0, server_1.stopWebServer)();
});
// ️️️✅ Best Practice: Structure tests by routes and stories
describe('/api', () => {
    describe('POST /orders', () => {
        // ️️️✅ Best Practice: Check the response
        test('When adding a new valid order, Then should get back approval with 200 response', async () => {
            // Arrange
            const orderToAdd = {
                userId: 1,
                productId: 2,
                deliveryAddress: '123 Main St, New York, NY 10001',
                paymentTermsInDays: 30,
            };
            // Act
            const receivedAPIResponse = await axiosAPIClient.post('/order', orderToAdd);
            // Assert
            expect(receivedAPIResponse).toMatchObject({
                data: {
                    id: expect.any(Number),
                },
            });
        });
        // ️️️✅ Best Practice: Check the new state
        // In a real-world project, this test can be combined with the previous test
        test('When adding a new valid order, Then should be able to retrieve it', async () => {
            // Arrange
            const orderToAdd = {
                userId: 1,
                productId: 2,
                deliveryAddress: '123 Main St, New York, NY 10001',
                paymentTermsInDays: 30,
            };
            // Act
            const { data: { id: addedOrderId }, } = await axiosAPIClient.post('/order', orderToAdd);
            // Assert
            const { data, status } = await axiosAPIClient.get(`/order/${addedOrderId}`);
            expect({
                data,
                status,
            }).toMatchObject({
                status: 200,
                data: {
                    ...orderToAdd,
                },
            });
        });
        // ️️️✅ Best Practice: Check invalid input
        test('When adding an order without specifying product, stop and return 400', async () => {
            // Arrange
            const orderToAdd = {
                userId: 1,
                deliveryAddress: '123 Main St, New York, NY 10001',
                paymentTermsInDays: 30,
            };
            // Act
            const orderAddResult = await axiosAPIClient.post('/order', orderToAdd);
            // Assert
            expect(orderAddResult.status).toBe(400);
        });
        // ️️️✅ Best Practice: Check error handling
        test.todo('When a new order failed, an invalid-order error was handled');
        // ️️️✅ Best Practice: Check monitoring metrics
        test.todo('When a new valid order was added, then order-added metric was fired');
        // ️️️✅ Best Practice: Simulate external failures
        test.todo('When the user service is down, then order is still added successfully');
        test('When the user does not exist, return 404 response', async () => {
            // Arrange
            (0, nock_1.default)('http://localhost/user/').get(`/7`).reply(404);
            const orderToAdd = {
                userId: 7,
                productId: 1,
                deliveryAddress: '123 Main St, New York, NY 10001',
                paymentTermsInDays: 30,
            };
            // Act
            const orderAddResult = await axiosAPIClient.post('/order', orderToAdd);
            // Assert
            expect(orderAddResult.status).toBe(404);
        });
    });
});
