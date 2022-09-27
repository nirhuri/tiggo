"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_port_reachable_1 = __importDefault(require("is-port-reachable"));
const path_1 = __importDefault(require("path"));
const docker_compose_1 = __importDefault(require("docker-compose"));
const child_process_1 = require("child_process");
exports.default = async () => {
    console.time('global-setup');
    // ️️️✅ Best Practice: Speed up during development, if already live then do nothing
    const isDBReachable = await (0, is_port_reachable_1.default)(54320);
    if (!isDBReachable) {
        // ️️️✅ Best Practice: Start the infrastructure within a test hook - No failures occur because the DB is down
        await docker_compose_1.default.upAll({
            cwd: path_1.default.join(__dirname),
            log: true,
        });
        await docker_compose_1.default.exec('database', ['sh', '-c', 'until pg_isready ; do sleep 1; done'], {
            cwd: path_1.default.join(__dirname),
        });
        // ️️️✅ Best Practice: Use npm script for data seeding and migrations
        (0, child_process_1.execSync)('npm run db:migrate');
        // ✅ Best Practice: Seed only metadata and not test record, read "Dealing with data" section for further information
        (0, child_process_1.execSync)('npm run db:seed');
    }
    // 👍🏼 We're ready
    console.timeEnd('global-setup');
};
