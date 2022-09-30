import prisma from './prisma'

// READ
export const getUser = async id => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

// CREATE
export const createUser = async (email, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    }
  })
  return user
}
