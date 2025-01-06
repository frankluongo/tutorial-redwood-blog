import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      body
      createdAt
      id
      slug
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <header>
            <h2>
              <Link to={routes.article({ slug: article.slug })}>
                {article.title}
              </Link>
            </h2>
          </header>
        </article>
      ))}
    </>
  )
}
