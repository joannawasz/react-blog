import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlePost, ArticleBody, ArticleHeading, ArticleInfo, ArticlePic, ArticleContentWrapper, ArticleButton } from './styles'
import ReadMoreAndLess from 'react-read-more-less';
// const cos: React.FC = () =>
class ArticleCard extends React.Component {
  render () {
    const pic = this.props.pic
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
            <ReadMoreAndLess
              charLimit={400}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {this.props.body}
            </ReadMoreAndLess>
          </ArticleBody>
        </ArticleContentWrapper>
        <ArticleButton>
          <Link to={`post/${this.props.id}`}>
            Go to the article →
          </Link>
        </ArticleButton>
      </ArticlePost>
    )
  }
}

export default ArticleCard
