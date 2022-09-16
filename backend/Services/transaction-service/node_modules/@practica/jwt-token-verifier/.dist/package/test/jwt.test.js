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
Object.defineProperty(exports, "__esModule", { value: true });
const httpMocks = __importStar(require("node-mocks-http"));
const sinon = __importStar(require("sinon"));
const jwt_verifier_middleware_1 = require("../lib/jwt-verifier-middleware");
const jwtHelper = __importStar(require("./jwt-helper"));
beforeEach(() => {
    sinon.restore();
});
describe('JWT middleware', () => {
    test('When using a valid token with bearer, then should allow request and receive 200 response', async () => {
        // Arrange
        const validToken = jwtHelper.signValidToken('test-user', ['admin']);
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const headers = { Authorization: `Bearer ${validToken}` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(200);
        expect(request.user).toEqual({ user: 'test-user', roles: ['admin'] });
        expect(nextFn.called).toBeTruthy();
    });
    test('When using a valid token without bearer, then should allow request and receive 200 response', async () => {
        // Arrange
        const validToken = jwtHelper.signValidToken('test-user', ['admin']);
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const headers = { Authorization: `${validToken}` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(200);
        expect(request.user).toEqual({ user: 'test-user', roles: ['admin'] });
        expect(nextFn.called).toBeTruthy();
    });
    test('When using an empty token, then should receive unauthorized response', async () => {
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const headers = { Authorization: `` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(401);
        expect({ nextCallCount: 0 }).toMatchObject({
            nextCallCount: nextFn.callCount,
        });
    });
    test('When using an invalid multiword header, then receive unauthorized response', async () => {
        // Arrange
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const headers = { Authorization: `Multiple words bearer one more` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(401);
        expect({ nextCallCount: 0 }).toMatchObject({
            nextCallCount: nextFn.callCount,
        });
    });
    test('When using a fake unsigned token, then should receive unauthorized response', async () => {
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const headers = { Authorization: `Bearer Not-really-token-fake` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(401);
        expect({ nextCallCount: 0 }).toMatchObject({
            nextCallCount: nextFn.callCount,
        });
    });
    test('When using an expired token, then should receive unauthorized response', async () => {
        const jwtMiddleware = (0, jwt_verifier_middleware_1.jwtVerifierMiddleware)({
            secret: jwtHelper.exampleSecret,
        });
        const expiredToken = jwtHelper.signExpiredToken('test-user', ['admin']);
        const headers = { Authorization: `Bearer ${expiredToken}` };
        const request = httpMocks.createRequest({
            headers,
        });
        const response = httpMocks.createResponse({ req: request });
        const nextFn = sinon.spy();
        // Act
        jwtMiddleware(request, response, nextFn);
        // Assert
        expect(response.statusCode).toEqual(401);
        expect({ nextCallCount: 0 }).toMatchObject({
            nextCallCount: nextFn.callCount,
        });
    });
});
