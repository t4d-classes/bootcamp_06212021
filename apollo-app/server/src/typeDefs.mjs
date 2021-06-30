import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    author(id: ID): Author
    books: [Book]
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    fullName: String
    phoneNumber: String
    books: [Book]
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
    author: Author
  }
`;
