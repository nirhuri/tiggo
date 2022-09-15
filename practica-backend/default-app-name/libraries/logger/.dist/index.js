"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.LoggerWrapper = void 0;
const pino_logger_1 = __importDefault(require("./pino.logger"));
class LoggerWrapper {
    constructor() {
        this.underlyingLogger = null;
    }
    configureLogger(configuration, overrideIfExists = true) {
        if (this.underlyingLogger === null || overrideIfExists === true) {
            this.underlyingLogger = new pino_logger_1.default(configuration.level || 'info', configuration.prettyPrint || false, undefined);
        }
    }
    resetLogger() {
        this.underlyingLogger = null;
    }
    debug(message, ...args) {
        this.configureLogger({}, false);
        this.underlyingLogger?.debug(message, ...args);
    }
    error(message, ...args) {
        this.configureLogger({}, false);
        this.underlyingLogger?.error(message, ...args);
    }
    info(message, ...args) {
        this.configureLogger({}, false);
        this.underlyingLogger?.info(message, ...args);
    }
    warning(message, ...args) {
        this.configureLogger({}, false);
        this.underlyingLogger?.warning(message, ...args);
    }
}
exports.LoggerWrapper = LoggerWrapper;
exports.logger = new LoggerWrapper();
