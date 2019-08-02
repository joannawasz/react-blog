import React from 'react'

import pic from '../../../images/img-alps.jpg'

import { Button2 } from '../../../constants/styles'

import {
  NewPostForm,
  NewPostInput,
  NewPostTextArea,
  NewPostButton,
  NewPostTitle
} from './styles';

class NewPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      body: '',
      author_id: '',
      created_at: '',
      modified_at: '-',
      pic: pic
    }
  }

  onAuthorAdd = author => {
    this.setState({
      author_id: author.target.value
    })
  }

  onTitleAdd = title => {
    this.setState({
      title: title.target.value
    })
  }

  onBodyAdd = body => {
    this.setState({
      body: body.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      id: '',
      title: '',
      body: '',
      author_id: '',
      created_at: '',
      modified_at: '',
      pic: pic
    })
  }

  render(){
    const { author_id, body, title } = this.state
    return (
      <NewPostForm onSubmit={this.handleSubmit}>
        <NewPostTitle>
          Post Author:
        </NewPostTitle>
        <NewPostInput value={author_id} onChange={this.onAuthorAdd} />
        <NewPostTitle>
          Post Title:
        </NewPostTitle>
        <NewPostInput value={title} onChange={this.onTitleAdd} />
        <NewPostTitle>
          Text Area:
        </NewPostTitle>
        <NewPostTextArea value={body} onChange={this.onBodyAdd}></NewPostTextArea>
        <NewPostButton>
          <Button2>Add new post</Button2>
        </NewPostButton>
      </NewPostForm>
    )
  }
}

export default NewPost
