export const typeDefs = `#graphql
  type Query {
    checkApiStatus: ApiStatus
  }
  
  type Mutation {
    testMutations(input: String):Test
  }

  type ApiStatus {
    status: String
  }

  type Test {
    status: String
  }
`;

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
