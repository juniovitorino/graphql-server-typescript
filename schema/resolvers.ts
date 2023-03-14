import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    checkApiStatus: async() => { 
      return { status: "Working as expected." }
    },
    users: async() => {
      return prisma.user.findMany()
    }
  },

  Mutation: {
    saveUser: async(_root:any, { input }:any) => {
      const { name, email } = input
      return prisma.user.create({
        data: {
          name,
          email
        }}
      )
    }
  }
};
