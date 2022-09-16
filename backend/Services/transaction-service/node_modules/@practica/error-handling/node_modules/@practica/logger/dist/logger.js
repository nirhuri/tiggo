"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.info = void 0;
const info = (message) => {
    console.log(message);
};
exports.info = info;
const error = (message) => {
    console.error(message);
};
exports.error = error;
