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
describe('/api', () => {
    describe('DELETE /order', () => {
        test('When deleting an existing order, Then it should NOT be retrievable', async () => {
            // Arrange
            const orderToDelete = {
                userId: 1,
                productId: 2,
                deliveryAddress: '123 Main St, New York, NY 10001',
                paymentTermsInDays: 30,
            };
            const deletedOrderId = (await axiosAPIClient.post('/order', orderToDelete)).data.id;
            // Act
            await axiosAPIClient.delete(`/order/${deletedOrderId}`);
            // Assert
            const aQueryForDeletedOrder = await axiosAPIClient.get(`/order/${deletedOrderId}`);
            expect(aQueryForDeletedOrder.status).toBe(404);
        });
    });
});
