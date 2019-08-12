/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'proptypes'
import pic from '../../../images/img-alps.jpg'
import { Post, PostHeading, PostInfoWrapper, PostPic, PostBody, PostBack } from './styles'

class ArticleFull extends React.Component {
  render() {
    const { title, body } = this.props
    return (
      <Post>
        <PostBack>
          <Link to="../">← Back to main page</Link>
        </PostBack>
        <PostPic src={pic} />
        <PostInfoWrapper>
          <PostHeading>{title}</PostHeading>
        </PostInfoWrapper>
        <PostBody>{body}</PostBody>
      </Post>
    )
  }
}

ArticleFull.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

ArticleFull.defaultProps = {
  title: 'default title',
  body: 'default body',
}

export default ArticleFull
