"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
var Money = /** @class */ (function () {
    function Money(amount) {
        this.amount = amount;
    }
    Money.prototype.isGreaterThanZero = function () {
        if (this.amount && this.amount > 0)
            return true;
        return false;
    };
    Money.prototype.isGreaterThan = function (money) {
        return this.amount != null && this.amount > money.getAmount();
    };
    Money.prototype.add = function (money) {
        return new Money(this.amount + money.getAmount());
    };
    Money.prototype.subtract = function (money) {
        return new Money(this.amount - money.getAmount());
    };
    Money.prototype.multiply = function (multiplier) {
        return new Money(this.amount * multiplier);
    };
    Money.prototype.getAmount = function () {
        return this.amount;
    };
    return Money;
}());
exports.Money = Money;
