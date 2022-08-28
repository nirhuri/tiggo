"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var common_1 = require("@hurinir/common");
var routing_controllers_1 = require("routing-controllers");
var transaction_controller_1 = require("../application/controllers/transaction-controller");
var App = /** @class */ (function () {
    function App(appInit) {
        var _this = this;
        this.app = (0, express_1.default)();
        this.app.use(this.headers);
        this.port = appInit.port;
        this.controllers();
        this.middlewares(appInit.middleWares);
        this.assets();
        process.on("uncaughtException", function (err) {
            console.log(err);
        });
        this.app.all("*", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new common_1.NotFoundError();
            });
        }); });
        this.app.use(common_1.errorHandler);
    }
    App.prototype.headers = function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader("Access-Control-Allow-Origin", "*");
        // Request methods you wish to allow
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT,    PATCH, DELETE");
        // Request headers you wish to allow
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader("Access-Control-Allow-Credentials", "truel");
        // Pass to next layer of middleware
        next();
    };
    App.prototype.controllers = function () {
        (0, routing_controllers_1.useExpressServer)(this.app, {
            controllers: [transaction_controller_1.TransactionController],
        });
    };
    App.prototype.middlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.assets = function () {
        this.app.use(express_1.default.static("public"));
        this.app.use(express_1.default.static("views"));
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, "0.0.0.0", function () {
            console.log("App listening on PORT ".concat(_this.port));
        });
    };
    App.prototype.getApp = function () {
        return this.app;
    };
    return App;
}());
exports.App = App;
