import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    author(id: ID): Author
    num1: Int
    num2: Float
    test: Boolean
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    fullName: String
    phoneNumber: String
  }
`;
