/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'proptypes'
import { Comment, CommentAuthor, CommentBody } from './styles'

class ArticleComment extends React.Component {
  render() {
    const { email, body } = this.props

    return (
      <Comment>
        <CommentAuthor>
          <span>Comment added by:</span>
          {email}
        </CommentAuthor>
        <CommentBody>{body}</CommentBody>
      </Comment>
    )
  }
}

ArticleComment.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default ArticleComment
