/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'proptypes'
import pic from '../../../images/img-1.jpg'
import {
  Post,
  PostHeading,
  PostHeaderWrapper,
  PostInfoWrapper,
  PostPic,
  PostBody,
  PostBack,
} from './styles'

class ArticleFull extends React.Component {
  render() {
    const { title, body } = this.props

    return (
      <Post>
        <PostBack>
          <Link to='../'>← Back to main page</Link>
        </PostBack>
        <PostHeaderWrapper>
          <PostInfoWrapper>
            <PostHeading>{title}</PostHeading>
          </PostInfoWrapper>
          <PostPic src={pic} />
        </PostHeaderWrapper>
        <PostBody>{body}</PostBody>
      </Post>
    )
  }
}

ArticleFull.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default ArticleFull
