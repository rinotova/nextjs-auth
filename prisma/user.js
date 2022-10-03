import prisma from './prisma';

// READ
export const getUser = async (email) => {
  const user = await prisma.account.findUnique({
    where: { email },
  });
  return user;
};

// CREATE
export const createUser = async (email, password) => {
  const user = await prisma.account.create({
    data: {
      email,
      password,
    },
  });
  return user;
};
