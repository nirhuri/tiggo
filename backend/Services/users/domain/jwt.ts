import jwt from 'jsonwebtoken';

export const generateJwtToken = (
  userId: string,
  email: string,
  privateKey: string
) => {
  const token = jwt.sign({ id: userId, email, time: Date.now() }, privateKey);
  return token;
};
