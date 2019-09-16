/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react'
import PropTypes from 'proptypes'

import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ArticleFull from '../ArticleFull'
import ArticleComment from '../ArticleComment'
import CommentForm from '../CommentForm'
import Footer from '../Footer'

import { ButtonOnClick } from '../../../constants/styles'

import { addComment, getPostId } from '../../../config/actions'
import {
  ArticlePageWrapper,
  ArticlePageBox,
  ArticleButtonWrapper,
  ArticleCommentsWrapper,
  ArticleLinkWrapper,
} from './styles'

const ArticlePage = props => {
  const { addComment, getPostId, match, post } = props
  const { id } = match.params
  const { comments } = post

  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    getPostId(id)
  }, [getPostId, id])

  const toggleComments = () => {
    setIsShowing(value => !value)
  }

  const nextPost = parseFloat(id) + 1
  const prevPost = parseFloat(id) - 1

  return (
    <ArticlePageWrapper>
      <ArticlePageBox className='article-page-wrapper'>
        <ToastContainer />
        {post && <ArticleFull {...post} />}
        <CommentForm onSubmit={addComment} />
        <ArticleButtonWrapper>
          <ButtonOnClick onClick={toggleComments}>
            {isShowing ? 'hide comments' : 'show comments'}
          </ButtonOnClick>
        </ArticleButtonWrapper>
        {isShowing && (
          <ArticleCommentsWrapper>
            {comments.map(data => (
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
  addComment: PropTypes.func.isRequired,
  getPostId: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  post: state.selectedPostReducer,
})

export default connect(
  mapStateToProps,
  {
    addComment,
    getPostId,
  },
)(ArticlePage)
