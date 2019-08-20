/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'proptypes'
import { Link } from 'react-router-dom'
import pic from '../../../images/img-alps.jpg'
import {
  ArticlePost,
  ArticleBody,
  ArticleHeading,
  ArticlePic,
  ArticleContentWrapper,
} from './styles'

class ArticleCard extends React.Component {
  render() {
    const { body, title, id } = this.props
    const textBodySubstring = body.substring(0, 150)

    return (
      <ArticlePost>
        <ArticlePic src={pic} />
        <ArticleContentWrapper>
          <ArticleHeading>{title}</ArticleHeading>
          <ArticleBody>
            {textBodySubstring}
            ...
            <Link to={`post/${id}`}>Read&nbsp;more&nbsp;→</Link>
          </ArticleBody>
        </ArticleContentWrapper>
      </ArticlePost>
    )
  }
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  id: PropTypes.number.isRequired,
}

ArticleCard.defaultProps = {
  body: 'default body',
}

export default ArticleCard
