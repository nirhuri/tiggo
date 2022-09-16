"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_ci_1 = __importDefault(require("is-ci"));
const docker_compose_1 = __importDefault(require("docker-compose"));
exports.default = async () => {
    if (is_ci_1.default) {
        // ️️️✅ Best Practice: Leave the DB up in dev environment
        docker_compose_1.default.down();
    }
};
