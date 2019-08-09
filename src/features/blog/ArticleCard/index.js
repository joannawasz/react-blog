import React from 'react'
import pic from '../../../images/img-alps.jpg'
import { Link } from 'react-router-dom'
import {
  ArticlePost,
  ArticleBody,
  ArticleHeading,
  ArticlePic,
  ArticleContentWrapper } from './styles'

class ArticleCard extends React.Component {
  render () {
    const {
      body
    } = this.props
    const textBodySubstring = body.substring(0, 150)

    return (
      <ArticlePost>
        <ArticlePic src={pic} />
        <ArticleContentWrapper>
          <ArticleHeading>
            {this.props.title}
          </ArticleHeading>
          <ArticleBody>
            {textBodySubstring}...
            <Link to={`post/${this.props.id}`}>
              Read more →
            </Link>
          </ArticleBody>
        </ArticleContentWrapper>
      </ArticlePost>
    )
  }
}

export default ArticleCard
