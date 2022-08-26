class DomainException extends Error {
  public constructor(message: string, stack: string | undefined) {
    super(message, stack);
  }
}
