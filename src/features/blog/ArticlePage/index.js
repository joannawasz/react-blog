import React, { useState, useMemo, useEffect, useCallback } from 'react'
import axios from 'axios'
import PropTypes from 'proptypes'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import ArticleFull from '../ArticleFull'
import ArticleComment from '../ArticleComment'
import CommentForm from '../CommentForm'
import Footer from '../Footer'
import { ButtonOnClick } from '../../../constants/styles'
import { API_URL } from '../../../config'
import {
  ArticlePageWrapper,
  ArticlePageBox,
  ArticleButtonWrapper,
  ArticleCommentsWrapper,
  ArticleLinkWrapper,
} from './styles'

const ArticlePage = ({
  match: {
    params: { id },
  },
}) => {
  const getComments = useMemo(() => {
    return axios.get(`${API_URL}comments?postId=${id}`)
  }, [id])

  const getPost = useMemo(() => {
    return axios.get(`${API_URL}posts/${id}`)
  }, [id])

  toast.configure({
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })

  const [isShowing, setIsShowing] = useState(false)
  const [commentList, setCommentList] = useState([])
  const [post, setPost] = useState(null)

  const getArticleData = useCallback(async () => {
    try {
      const postData = (await getPost).data
      setPost(postData)
    } catch (error) {
      toast.error('Problem occured, sorry!')
    }
  }, [getPost])

  const loadComments = useCallback(async () => {
    try {
      const comments = (await getComments).data
      setCommentList(comments)
    } catch (error) {
      toast.error('Problem occured, sorry!')
    }
  }, [getComments])

  useEffect(() => {
    getArticleData()
  }, [getArticleData])

  useEffect(() => {
    if (!commentList.length) {
      loadComments()
    }
    // eslint-disable-next-line
  }, [isShowing])

  const toggleComments = () => {
    setIsShowing(value => !value)
  }

  const onAddComment = comment => {
    setCommentList(data => [
      {
        ...comment,
        post_id: data.postId,
        id: data.length + 1,
      },
      ...data,
    ])
  }

  const nextPost = parseFloat(id) + 1
  const prevPost = parseFloat(id) - 1

  return (
    <ArticlePageWrapper>
      <ArticlePageBox className='article-page-wrapper'>
        <ToastContainer />
        {post && <ArticleFull {...post} />}
        <CommentForm onSubmit={onAddComment} />
        <ArticleButtonWrapper>
          <ButtonOnClick onClick={toggleComments}>
            {isShowing ? 'hide comments' : 'show comments'}
          </ButtonOnClick>
        </ArticleButtonWrapper>
        {isShowing && (
          <ArticleCommentsWrapper>
            {commentList.map(data => (
              <ArticleComment {...data} key={data.id} />
            ))}
          </ArticleCommentsWrapper>
        )}
      </ArticlePageBox>
      <Footer>
        <ArticleLinkWrapper>
          <Link to={`${prevPost}`}>Last Post</Link>
          <Link to={`${nextPost}`}>Next Post</Link>
        </ArticleLinkWrapper>
      </Footer>
    </ArticlePageWrapper>
  )
}

ArticlePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}

export default ArticlePage
