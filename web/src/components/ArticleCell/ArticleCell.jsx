import Article from 'src/components/Article/Article'

export const QUERY = gql`
  query FindArticleQuery($slug: String!) {
    article: postBySlug(slug: $slug) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }) => {
  return <Article article={article} />
}
