import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlePost, ArticleBody, ArticleHeading, ArticleInfo, ArticlePic, ArticleContentWrapper } from './styles'

class ArticleCard extends React.Component {
  render () {
    const pic = this.props.pic
    const textBodySubstring = this.props.body.substring(0, 400)

    return (
      <ArticlePost>
        <ArticlePic src={pic} />
        <ArticleContentWrapper>
          <ArticleHeading>
            {this.props.title}
          </ArticleHeading>
          <ArticleInfo>
            <p>Author: <span>{this.props.author_id}</span></p>
            <p>Created: <span>{this.props.created_at}</span></p>
            <p>Modified: <span>{this.props.modified_at}</span></p>
          </ArticleInfo>
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
