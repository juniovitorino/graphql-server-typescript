export const resolvers = {
  Query: {
    checkApiStatus: () => { 
      return { status: "Working as expected." }
    }
  },

  Mutation: {
    testMutations: async () => {
      return {
        status: "Mutation are working"
      }
    }
  }
};
