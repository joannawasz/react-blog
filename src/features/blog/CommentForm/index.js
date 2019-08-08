import React from 'react'

import { Button2 } from '../../../constants/styles'

import {
  CommentInput,
  CommentTextArea,
  CommentFormBox,
  CommentButton
} from './styles'

class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      post_author: '',
      body: ''
    }
  }

  onAuthorChange = (author) => {
    this.setState({
      post_author: author.target.value
    })
  }

  onBodyChange = (text) => {
    this.setState({
      body: text.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      post_author: '',
      body: ''
    })
  }

  render = () => {
    const { post_author, body } = this.state
    return (
      <CommentFormBox onSubmit={this.handleSubmit}>
        <CommentInput
          placeholder="Podaj swój email"
          value={post_author}
          onChange={this.onAuthorChange}
        />
        <CommentTextArea
          placeholder="Podaj treść komentarza"
          value={body}
          onChange={this.onBodyChange}>
        </CommentTextArea>
        <CommentButton>
          <Button2>add comment</Button2>
        </CommentButton>
      </CommentFormBox>
    )
  }
}

export default CommentForm
