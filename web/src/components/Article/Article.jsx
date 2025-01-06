const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>{article.title}</h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
