"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const http_1 = require("http");
const logger_1 = require("@practica/logger");
const __1 = require("..");
beforeEach(() => {
    sinon_1.default.restore();
});
describe('handleError', () => {
    test('When uncaughtException emitted, error handled should catch and handle the error properly', () => {
        const httpServerMock = sinon_1.default.createStubInstance(http_1.Server);
        const loggerStub = sinon_1.default.stub(logger_1.logger, 'error');
        __1.errorHandler.listenToErrorEvents(httpServerMock);
        const errorName = 'mocking an uncaught exception';
        const errorToEmit = new Error(errorName);
        process.emit('uncaughtException', errorToEmit);
        const message = loggerStub.firstCall.args[0];
        const appError = loggerStub.firstCall.args[1];
        expect(loggerStub.callCount).toBe(1);
        expect(message).toBe(errorToEmit.message);
        expect(appError).toMatchObject({
            name: errorToEmit.name,
            message: errorToEmit.message,
            stack: expect.any(String),
        });
    });
    test('When handling an Error instance, should log an AppError instance after receiving an Error instance', () => {
        const errorToHandle = new Error('mocking pre-known error');
        const stdoutSpy = jest.spyOn(process.stdout, 'write');
        __1.errorHandler.handleError(errorToHandle);
        expect(stdoutSpy).toHaveBeenCalled();
    });
    test('When handling AppError, then all the important properties are passed to the logger', () => {
        const errorToHandle = new __1.AppError('invalid-input', 'missing important field', 400, true);
        const loggerListener = sinon_1.default.stub(logger_1.logger, 'error');
        __1.errorHandler.handleError(errorToHandle);
        expect({ loggerCalls: 1 }).toMatchObject({
            loggerCalls: loggerListener.callCount,
        });
        expect(loggerListener.lastCall.args).toMatchObject([
            'missing important field',
            {
                name: 'invalid-input',
                HTTPStatus: 400,
                message: 'missing important field',
                isTrusted: true,
                stack: expect.any(String),
            },
        ]);
    });
    test.each([
        1,
        'oops, this error is actually a string!',
        null,
        Infinity,
        false,
        { someKey: 'someValue' },
        [],
        undefined,
        NaN,
        '🐥',
        () => undefined,
    ])('When handling an Error instance, should log an AppError instance after receiving unknown error of multiple types', (unknownErrorValue) => {
        const loggerStub = sinon_1.default.stub(logger_1.logger, 'error');
        __1.errorHandler.handleError(unknownErrorValue);
        const message = loggerStub.firstCall.args[0];
        const appError = loggerStub.firstCall.args[1];
        expect(loggerStub.callCount).toBe(1);
        expect(message.includes(typeof unknownErrorValue)).toBe(true);
        expect(appError.name).toBe('general-error');
    });
});
