"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@practica/logger");
const error_handling_1 = require("@practica/error-handling");
const server_1 = require("./entry-points/api/server");
async function start() {
    // 🦉 Array of entry point is being used to support more entry-points kinds like message queue, scheduled job,
    return Promise.all([(0, server_1.startWebServer)()]);
}
start()
    .then((startResponses) => {
    logger_1.logger.info(`The app has started successfully ${startResponses}}`);
})
    .catch((error) => {
    // ️️️✅ Best Practice: A failure during startup is catastrophic and should lead to process exit (you may retry before)
    // Consequently, we flag the error as catastrophic
    error_handling_1.errorHandler.handleError(new error_handling_1.AppError('startup-failure', error.message, 500, false, error));
});
