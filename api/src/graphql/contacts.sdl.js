export const schema = gql`
  type Contact {
    createdAt: DateTime!
    email: String!
    id: String!
    message: String!
    name: String
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: String!): Contact @requireAuth
  }

  input CreateContactInput {
    email: String!
    message: String!
    name: String
  }

  input UpdateContactInput {
    email: String
    message: String
    name: String
  }

  # type Mutation {
  #   createContact(input: CreateContactInput!): Contact! @requireAuth
  #   updateContact(id: String!, input: UpdateContactInput!): Contact!
  #     @requireAuth
  #   deleteContact(id: String!): Contact! @requireAuth
  # }
  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
  }
`
