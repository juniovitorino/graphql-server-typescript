export const typeDefs = `#graphql
  type Query {
    checkApiStatus: ApiStatus
    users: [User]
  }

  type User {
    id: ID!
    name: String
    email: String
  }

  input InputUser {
    name: String
    email: String
  }
 
  type Mutation {
    saveUser(input: InputUser):User
  }

  type ApiStatus {
    status: String
  }
`;
