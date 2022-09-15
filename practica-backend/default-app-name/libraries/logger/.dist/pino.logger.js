"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = require("pino");
class PinoLogger {
    constructor(level, prettyPrintEnabled, destStream) {
        this.level = level;
        this.prettyPrintEnabled = prettyPrintEnabled;
        this.destStream = destStream;
        const opts = {
            level,
            transport: prettyPrintEnabled
                ? {
                    target: 'pino-pretty',
                    options: {
                        colorize: true,
                        sync: true,
                    },
                }
                : undefined,
        };
        this.logger = (0, pino_1.pino)(opts);
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    warning(message, ...args) {
        this.logger.warn(message, ...args);
    }
}
exports.default = PinoLogger;
