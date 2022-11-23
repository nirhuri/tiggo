export class CreateUserDto {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public email: string,
    public id?: string,
    public token?: string
  ) {}
}
