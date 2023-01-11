"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_CODES = void 0;
// eslint-disable-next-line no-shadow
var HTTP_CODES;
(function (HTTP_CODES) {
    HTTP_CODES[HTTP_CODES["OK"] = 200] = "OK";
    HTTP_CODES[HTTP_CODES["CREATED"] = 201] = "CREATED";
    HTTP_CODES[HTTP_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_CODES[HTTP_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_CODES[HTTP_CODES["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTP_CODES[HTTP_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODES[HTTP_CODES["CONFLICT"] = 409] = "CONFLICT";
    HTTP_CODES[HTTP_CODES["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
})(HTTP_CODES = exports.HTTP_CODES || (exports.HTTP_CODES = {}));
