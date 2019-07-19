import React, { useState } from 'react'
import { fakeData, comments } from '../ArticleList/mocks'
import ArticleFull from '../ArticleFull/index'
import ArticleComment from '../ArticleComment/index'
import { ArticlePageWrapper, ArticleButton, ButtonWrapper, CommentsWrapper } from './styles'

const ArticlePage = ({ match }) => {
  const article = fakeData.find(doc => doc.id === match.params.id)
  const comment = comments.filter(doc => doc.id === match.params.id)
  const [ isShowing, setIsShowing ] = useState(false)

  const loadComments = () => {
    setIsShowing(value => !value)
  }

  return (
    <ArticlePageWrapper>
      <ArticleFull { ...article } />
      <ButtonWrapper>
        <ArticleButton onClick={loadComments}>
          {isShowing ? 'Hide Comments' : 'Show Comments'}
        </ArticleButton>
      </ButtonWrapper>
      {isShowing &&
        <CommentsWrapper>
          {comment.map(data => <ArticleComment {...data} key={data.post_id} />)}
        </CommentsWrapper>
      }
    </ArticlePageWrapper>
  )
}

export default ArticlePage
