import { AppError } from '@practica/error-handling';
import bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashPassword;
  } catch (err) {
    throw new AppError(
      'encryption-error',
      'Can not encrypt password',
      500,
      true
    );
  }
}

export async function checkPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isSamePassword = await bcrypt.compare(password, hashedPassword);
  return isSamePassword;
}
