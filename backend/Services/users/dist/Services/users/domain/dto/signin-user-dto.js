"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninUserDto = void 0;
class SigninUserDto {
    // eslint-disable-next-line no-useless-constructor
    constructor(id, firstName, lastName, fullName, email, roleType, roleTitle, token) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.roleType = roleType;
        this.roleTitle = roleTitle;
        this.token = token;
    }
}
exports.SigninUserDto = SigninUserDto;
