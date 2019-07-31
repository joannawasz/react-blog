import React, { useState } from 'react'
import { fakeData, comments } from '../ArticleList/mocks'
import ArticleFull from '../ArticleFull'
import ArticleComment from '../ArticleComment'
import { ArticlePageWrapper, ArticleButton, ArticleButtonWrapper, ArticleCommentsWrapper } from './styles'
import CommentForm from '../CommentForm'

const ArticlePage = ({ match }) => {
  const [ isShowing, setIsShowing ] = useState(false)
  const [ commentList, setCommentList ] = useState(comments)

  const comment = commentList.filter(doc => doc.id === match.params.id)
  const article = fakeData.find(doc => doc.id === match.params.id)

  const loadComments = () => {
    setIsShowing(value => !value)
  }

  const onAddComment = comment => {
    setCommentList(commentList => [
      ...commentList,
      {
        ...comment,
        post_id: commentList.length + 1,
        id: article.id
      }
    ])
  }

  return (
    <ArticlePageWrapper>
      <ArticleFull { ...article } />
      <CommentForm onSubmit={onAddComment} />
      <ArticleButtonWrapper>
        <ArticleButton onClick={loadComments}>
          {isShowing ? 'hide comments' : 'show comments'}
        </ArticleButton>
      </ArticleButtonWrapper>
      {isShowing &&
        <ArticleCommentsWrapper>
          {comment.map(data => <ArticleComment {...data} key={data.post_id} />)}
        </ArticleCommentsWrapper>
      }
      </ArticlePageWrapper>
  )
}

export default ArticlePage
