import { compare, hash } from 'bcryptjs';

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (plainTextPassword, hashedPassword) => {
  const isValidPassword = await compare(plainTextPassword, hashedPassword);
  return isValidPassword;
};
