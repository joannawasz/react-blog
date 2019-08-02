import React from 'react'
import { Link } from 'react-router-dom'
import {
  Post,
  PostHeading,
  PostInfoWrapper,
  PostDate,
  PostAuthor,
  PostPic,
  PostBody,
  PostBack } from '../ArticleFull/styles'

class ArticleFull extends React.Component {
  render () {
    const pic = this.props.pic
    return (
      <Post>
        <PostBack>
          <Link to={`../`}>
            ← Back to main page
          </Link>
        </PostBack>
        <PostPic src={pic} />
        <PostInfoWrapper>
          <PostDate>
            {this.props.created_at}
            <span>modified: {this.props.modified_at}</span>
          </PostDate>
          <PostHeading>
            {this.props.title}
          </PostHeading>
          <PostAuthor>
            {this.props.author_id}
          </PostAuthor>
        </PostInfoWrapper>
        <PostBody>
          {this.props.body}
        </PostBody>
      </Post>
    )
  }
}

export default ArticleFull
