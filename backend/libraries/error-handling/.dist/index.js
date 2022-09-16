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
exports.AppError = exports.metricsExporter = exports.errorHandler = void 0;
const logger_1 = require("@practica/logger");
const util = __importStar(require("util"));
let httpServerRef;
const errorHandler = {
    listenToErrorEvents: (httpServer) => {
        httpServerRef = httpServer;
        process.on('uncaughtException', async (error) => {
            await errorHandler.handleError(error);
        });
        process.on('unhandledRejection', async (reason) => {
            await errorHandler.handleError(reason);
        });
        process.on('SIGTERM', async () => {
            logger_1.logger.error('App received SIGTERM event, try to gracefully close the server');
            await terminateHttpServerAndExit();
        });
        process.on('SIGINT', async () => {
            logger_1.logger.error('App received SIGINT event, try to gracefully close the server');
            await terminateHttpServerAndExit();
        });
    },
    handleError: (errorToHandle) => {
        try {
            const appError = normalizeError(errorToHandle);
            logger_1.logger.error(appError.message, appError);
            metricsExporter.fireMetric('error', { errorName: appError.name });
            if (!appError.isTrusted) {
                terminateHttpServerAndExit();
            }
        }
        catch (handlingError) {
            process.stdout.write('The error handler failed, here are the handler failure and then the origin error that it tried to handle');
            process.stdout.write(JSON.stringify(handlingError));
            process.stdout.write(JSON.stringify(errorToHandle));
        }
    },
};
exports.errorHandler = errorHandler;
const terminateHttpServerAndExit = async () => {
    if (httpServerRef) {
        await httpServerRef.close();
    }
    process.exit();
};
const normalizeError = (errorToHandle) => {
    if (errorToHandle instanceof AppError) {
        return errorToHandle;
    }
    if (errorToHandle instanceof Error) {
        const appError = new AppError(errorToHandle.name, errorToHandle.message);
        appError.stack = errorToHandle.stack;
        return appError;
    }
    const inputType = typeof errorToHandle;
    return new AppError('general-error', `Error Handler received a none error instance with type - ${inputType}, value - ${util.inspect(errorToHandle)}`);
};
class AppError extends Error {
    constructor(name, message, HTTPStatus = 500, isTrusted = true, cause) {
        super(message);
        this.name = name;
        this.message = message;
        this.HTTPStatus = HTTPStatus;
        this.isTrusted = isTrusted;
        this.cause = cause;
    }
}
exports.AppError = AppError;
const metricsExporter = {
    fireMetric: async (name, labels) => {
        console.log('In real production code I will really fire metrics', {
            name,
            labels,
        });
    },
};
exports.metricsExporter = metricsExporter;
