export const schema = gql`
  type Post {
    body: String!
    createdAt: DateTime!
    id: String!
    slug: String!
    title: String!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
    postBySlug(slug: String!): Post @skipAuth
  }

  input CreatePostInput {
    body: String!
    slug: String!
    title: String!
  }

  input UpdatePostInput {
    body: String
    slug: String
    title: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
