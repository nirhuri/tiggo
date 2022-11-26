export class SigninUserDto {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private fullName: string,
    private email: string,
    private roleType: number,
    private roleTitle: string,
    private token: string
  ) {}
}
