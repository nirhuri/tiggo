"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon_1 = __importDefault(require("sinon"));
const index_1 = require("../index");
beforeEach(() => {
    sinon_1.default.restore();
    index_1.logger.resetLogger();
});
describe('logger', () => {
    test('When no explicit configuration is set, info logs are written', async () => {
        const stdoutStub = sinon_1.default.stub(process.stdout, 'write');
        index_1.logger.info('This is an info message');
        expect({ stdCallCount: stdoutStub.callCount }).toMatchObject({
            stdCallCount: 1,
        });
        const lastStdoutCall = JSON.parse(stdoutStub.lastCall?.firstArg);
        expect(lastStdoutCall).toMatchObject({ msg: 'This is an info message' });
    });
    test('When log level is DEBUG and logger emits INFO statement, then stdout contains the entry', async () => {
        index_1.logger.configureLogger({ level: 'debug' }, true);
        const stdoutStub = sinon_1.default.stub(process.stdout, 'write');
        index_1.logger.info('This is an info message');
        expect({ stdCallCount: stdoutStub.callCount }).toMatchObject({
            stdCallCount: 1,
        });
        const lastStdoutCall = JSON.parse(stdoutStub.lastCall?.firstArg);
        expect(lastStdoutCall).toMatchObject({ msg: 'This is an info message' });
    });
    test('When logger is configured and then re-configured, then the new config applies', async () => {
        index_1.logger.configureLogger({ level: 'info' }, true);
        index_1.logger.configureLogger({ level: 'debug' }, true);
        const stdoutStub = sinon_1.default.stub(process.stdout, 'write');
        index_1.logger.debug('This is an info message');
        expect({ stdCallCount: stdoutStub.callCount }).toMatchObject({
            stdCallCount: 1,
        });
        const lastStdoutCall = JSON.parse(stdoutStub.lastCall?.firstArg);
        expect(lastStdoutCall).toMatchObject({ msg: 'This is an info message' });
    });
    test('When log level is ERROR and logger emits INFO statement, then nothing is written', async () => {
        index_1.logger.configureLogger({ level: 'error' }, true);
        const stdoutStub = sinon_1.default.stub(process.stdout, 'write');
        index_1.logger.info('This is an info message');
        expect(stdoutStub.callCount).toBe(0);
    });
    test('When configuring for pretty-print, then its written to stdout', async () => {
        index_1.logger.configureLogger({ level: 'info', prettyPrint: false }, true);
        const stdoutStub = sinon_1.default.stub(process.stdout, 'write');
        index_1.logger.info('This is an info message');
        expect({ stdCallCount: stdoutStub.callCount }).toMatchObject({
            stdCallCount: 1,
        });
    });
});
