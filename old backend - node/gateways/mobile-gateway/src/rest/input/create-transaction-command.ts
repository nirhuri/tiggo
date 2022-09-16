export class CreateTransactionCommand {
  constructor(public readonly amount: number, public readonly title: string) {}
}