"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
var inversify_1 = require("inversify");
var routing_controllers_1 = require("routing-controllers");
var inversify_types_1 = require("../../container/types/inversify.types");
var create_transaction_command_1 = require("../../domain/domain-application-service/dto/create/create-transaction-command");
var TransactionController = /** @class */ (function () {
    function TransactionController(transactionApplicationService) {
        this.transactionApplicationService = transactionApplicationService;
    }
    TransactionController.prototype.createCashTransaction = function (createTransactionCommand) {
        return "Created";
    };
    __decorate([
        (0, routing_controllers_1.Post)('/cash'),
        __param(0, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_transaction_command_1.CreateTransactionCommand]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "createCashTransaction", null);
    TransactionController = __decorate([
        (0, inversify_1.injectable)(),
        (0, routing_controllers_1.Controller)('/transaction'),
        __param(0, (0, inversify_1.inject)(inversify_types_1.TYPES.TransactionApplicationService)),
        __metadata("design:paramtypes", [Object])
    ], TransactionController);
    return TransactionController;
}());
exports.TransactionController = TransactionController;
