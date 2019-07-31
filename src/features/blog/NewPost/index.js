import React from 'react'
import { Link } from 'react-router-dom'
import { NewPostForm, NewPostInput, NewPostTextArea, NewPostButton, NewPostTitle } from './styles';
import { PostBack } from '.././ArticleFull/styles'
import pic from '../../../images/img-alps.jpg'

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
        <NewPostButton>Add new post</NewPostButton>
        {/* <PostBack>
          <Link to={`../`}>
            ← Back to main page
          </Link>
        </PostBack> */}
      </NewPostForm>
    )
  }
}

export default NewPost
