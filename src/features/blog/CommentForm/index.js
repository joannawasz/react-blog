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
      email: '',
      body: ''
    }
  }

  onAuthorChange = (author) => {
    this.setState({
      email: author.target.value
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
      email: '',
      body: ''
    })
  }

  render = () => {
    const { email, body } = this.state
    return (
      <CommentFormBox onSubmit={this.handleSubmit}>
        <CommentInput
          placeholder="Podaj swój email"
          value={email}
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
