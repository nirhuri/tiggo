class Money {
  private readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public isGreaterThanZero(): boolean {
    if (this.amount && this.amount > 0) return true;
    return false;
  }

  public isGreaterThan(money: Money): boolean {
    return this.amount != null && this.amount > money.getAmount();
  }

  public add(money: Money): Money {
    return new Money(this.amount + money.getAmount());
  }

  public subtract(money: Money): Money {
    return new Money(this.amount - money.getAmount());
  }

  public multiply(multiplier: number): Money {
    return new Money(this.amount * multiplier);
  }

  public getAmount(): number {
    return this.amount;
  }
}
