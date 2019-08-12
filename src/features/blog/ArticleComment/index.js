import React from 'react'
import { Comment, CommentAuthor, CommentBody } from './styles'

class ArticleComment extends React.Component {
  render () {
    return (
      <Comment>
        <CommentAuthor>
          <span>Comment added by:</span> {this.props.email}
        </CommentAuthor>
        <CommentBody>
          {this.props.body}
        </CommentBody>
      </Comment>
    )
  }
}

export default ArticleComment
