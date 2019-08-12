import React from 'react'
import PropTypes from 'proptypes'
import pic from '../../../images/img-alps.jpg'
import { Button2 } from '../../../constants/styles'
import { NewPostForm, NewPostInput, NewPostTextArea, NewPostButton, NewPostTitle } from './styles'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      body: '',
      userId: '',
      created_at: '',
      modified_at: '-',
      pic,
    }
  }

  onAuthorAdd = author => {
    this.setState({
      userId: author.target.value,
    })
  }

  onTitleAdd = title => {
    this.setState({
      title: title.target.value,
    })
  }

  onBodyAdd = body => {
    this.setState({
      body: body.target.value,
    })
  }

  handleSubmit = e => {
    const { onSubmit } = this.props
    e.preventDefault()
    onSubmit(this.state)
    this.setState({
      id: '',
      title: '',
      body: '',
      userId: '',
      created_at: '',
      modified_at: '',
      pic,
    })
  }

  render() {
    const { userId, body, title } = this.state
    return (
      <NewPostForm onSubmit={this.handleSubmit}>
        <NewPostTitle>Post Author:</NewPostTitle>
        <NewPostInput value={userId} onChange={this.onAuthorAdd} required />
        <NewPostTitle>Post Title:</NewPostTitle>
        <NewPostInput value={title} onChange={this.onTitleAdd} required />
        <NewPostTitle>Text Area:</NewPostTitle>
        <NewPostTextArea value={body} onChange={this.onBodyAdd} required />
        <NewPostButton>
          <Button2>Add new post</Button2>
        </NewPostButton>
      </NewPostForm>
    )
  }
}

NewPost.propTypes = {
  onSubmit: PropTypes.func,
}

NewPost.defaultProps = {
  onSubmit: () => {},
}

export default NewPost
