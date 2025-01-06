import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ slug }) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />
      <ArticleCell slug={slug} />
    </>
  )
}

export default ArticlePage
