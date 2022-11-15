export class CreateUserDto {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private email: string
  ) {}
}
