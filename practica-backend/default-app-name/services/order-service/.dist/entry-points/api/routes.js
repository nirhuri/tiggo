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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("@practica/logger");
const newOrderUseCase = __importStar(require("../../domain/new-order-use-case"));
function defineRoutes(expressApp) {
    const router = express_1.default.Router();
    router.post('/', async (req, res, next) => {
        try {
            logger_1.logger.info(`Order API was called to add new Order ${util_1.default.inspect(req.body)}`);
            // ✅ Best Practice: Using the 3-tier architecture, routes/controller are kept thin, logic is encapsulated in a dedicated domain folder
            const addOrderResponse = await newOrderUseCase.addOrder(req.body);
            return res.json(addOrderResponse);
        }
        catch (error) {
            next(error);
            return undefined;
        }
    });
    // get existing order by id
    router.get('/:id', async (req, res) => {
        logger_1.logger.info(`Order API was called to get user by id ${req.params.id}`);
        const response = await newOrderUseCase.getOrder(req.params.id);
        if (!response) {
            res.status(404).end();
            return;
        }
        res.json(response);
    });
    // delete order by id
    router.delete('/:id', async (req, res) => {
        logger_1.logger.info(`Order API was called to delete order ${req.params.id}`);
        await newOrderUseCase.deleteOrder(req.params.id);
        res.status(204).end();
    });
    expressApp.use('/order', router);
}
exports.default = defineRoutes;
