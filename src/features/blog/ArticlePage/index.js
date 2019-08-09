import React, { useState, useMemo, useEffect, useCallback } from 'react'
import axios from 'axios'

import ArticleFull from '../ArticleFull'
import ArticleComment from '../ArticleComment'
import CommentForm from '../CommentForm'

import { Button1 } from '../../../constants/styles'

import { API_URL } from '../../../config'

import {
  ArticlePageWrapper,
  ArticleButtonWrapper,
  ArticleCommentsWrapper } from './styles'

const ArticlePage = ({ match: { params: { id }}}) => {
  const getComments = useMemo(() => {
    return axios.get(`${API_URL}comments?postId=${id}`)
  }, [id])

  const getPost = useMemo(() => {
    return axios.get(`${API_URL}posts/${id}`)
  }, [id])

  const [ isShowing, setIsShowing ] = useState(false)
  const [ commentList, setCommentList ] = useState([])
  const [ post, setPost ] = useState([])

  const getArticleData = useCallback(async() => {
    try {
      const post = (await getPost).data
      console.log(post)
      setPost(post)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const loadComments = useCallback(async() => {
    try {
      const comments = (await getComments).data
      console.log(comments)
      setCommentList(comments)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getArticleData()
  }, [])

  useEffect(() => {
    if (!commentList.length) {
      loadComments()
    }
  }, [isShowing])

  const toggleComments = () => {
    setIsShowing(value => !value)
  }

  const onAddComment = comment => {
    setCommentList(commentList => [
      {
        ...comment,
        post_id: commentList.postId,
        id: commentList.length + 1
      },
      ...commentList
    ])
  }

  return (
    <ArticlePageWrapper className="article-page-wrapper">
      <ArticleFull { ...post } />
      <CommentForm onSubmit={onAddComment} />
      <ArticleButtonWrapper>
        <Button1 onClick={toggleComments}>
          {isShowing ? 'hide comments' : 'show comments'}
        </Button1>
      </ArticleButtonWrapper>
      {isShowing &&
        <ArticleCommentsWrapper>
          {commentList.map(data => <ArticleComment {...data} key={data.id} />)}
        </ArticleCommentsWrapper>
      }
    </ArticlePageWrapper>
  )
}

export default ArticlePage
