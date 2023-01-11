"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDto = void 0;
class GetUserDto {
    // eslint-disable-next-line no-useless-constructor
    constructor(id, firstName, lastName, fullName, email, roleTitle, roleType, createdAt, updatedAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.roleTitle = roleTitle;
        this.roleType = roleType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.GetUserDto = GetUserDto;
