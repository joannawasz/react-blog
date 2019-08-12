import React from 'react'
import pic from '../../../images/img-alps.jpg'
import { Link } from 'react-router-dom'
import {
  Post,
  PostHeading,
  PostInfoWrapper,
  PostPic,
  PostBody,
  PostBack } from '../ArticleFull/styles'

class ArticleFull extends React.Component {
  render () {
    return (
      <Post>
        <PostBack>
          <Link to={`../`}>
            ← Back to main page
          </Link>
        </PostBack>
        <PostPic src={pic} />
        <PostInfoWrapper>
          <PostHeading>
            {this.props.title}
          </PostHeading>
        </PostInfoWrapper>
        <PostBody>
          {this.props.body}
        </PostBody>
      </Post>
    )
  }
}

export default ArticleFull
