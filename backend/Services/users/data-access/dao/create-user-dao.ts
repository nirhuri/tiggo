import { addUserRequest } from '../../domain/user-schema';

export class CreateUserDao {
  // eslint-disable-next-line no-useless-constructor, no-shadow
  constructor(private addUserRequest: addUserRequest) {}

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
