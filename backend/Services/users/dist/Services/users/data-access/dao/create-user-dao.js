"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDao = void 0;
class CreateUserDao {
    // eslint-disable-next-line no-useless-constructor, no-shadow
    constructor(addUserRequest) {
        this.addUserRequest = addUserRequest;
    }
    dtoToDao() {
        return {
            email: this.addUserRequest.email,
            first_name: this.addUserRequest.firstName,
            last_name: this.addUserRequest.lastName,
            full_name: this.addUserRequest.fullName,
            password: this.addUserRequest.password,
            role_id: this.addUserRequest.roleId,
        };
    }
}
exports.CreateUserDao = CreateUserDao;
