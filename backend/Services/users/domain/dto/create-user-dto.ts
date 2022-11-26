export class CreateUserDto {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public email: string,
    public token: string
  ) {}
}
