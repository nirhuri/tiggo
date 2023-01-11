"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
class CreateUserDto {
    // eslint-disable-next-line no-useless-constructor
    constructor(id, firstName, lastName, fullName, email, token) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.token = token;
    }
}
exports.CreateUserDto = CreateUserDto;
