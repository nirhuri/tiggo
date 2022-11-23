export class GetUserDto {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private fullName: string,
    private email: string,
    private roleTitle: string,
    private roleType: number,
    private createdAt: Date,
    private updatedAt: Date
  ) {}
}