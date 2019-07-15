import React from 'react'
import { Comment, CommentAuthor, CommentBody } from './styles'

class ArticleComment extends React.Component {
  render () {
    return (
      <Comment className="c-comment">
        <CommentAuthor className="c-comment__author">
          <span>Comment added by:</span> {this.props.post_author}
        </CommentAuthor>
        <CommentBody className="c-comment__body">
          {this.props.body}
        </CommentBody>
      </Comment>
    )
  }
}

export default ArticleComment
