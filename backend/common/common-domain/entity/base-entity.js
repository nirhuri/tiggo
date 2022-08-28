"use strict";
var BaseEntity = /** @class */ (function () {
    function BaseEntity(id) {
        this._id = id;
    }
    BaseEntity.prototype.getId = function () {
        return this._id;
    };
    return BaseEntity;
}());
