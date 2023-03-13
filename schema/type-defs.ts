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
