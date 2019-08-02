import React, { useState } from 'react'

import ArticleFull from '../ArticleFull'
import ArticleComment from '../ArticleComment'
import CommentForm from '../CommentForm'

import { fakeData, comments } from '../../../constants/mocks'
import { Button1 } from '../../../constants/styles'

import {
  ArticlePageWrapper,
  ArticleButtonWrapper,
  ArticleCommentsWrapper } from './styles'


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
    <ArticlePageWrapper className="article-page-wrapper">
      <ArticleFull { ...article } />
      <CommentForm onSubmit={onAddComment} />
      <ArticleButtonWrapper>
        <Button1 onClick={loadComments}>
          {isShowing ? 'hide comments' : 'show comments'}
        </Button1>
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
