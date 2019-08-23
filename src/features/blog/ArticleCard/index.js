/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'proptypes'
import { Link } from 'react-router-dom'
import pic from '../../../images/img-1.jpg'
import {
  ArticlePost,
  ArticleBody,
  ArticleHeading,
  ArticlePic,
  ArticleContentWrapper,
  ArticlePicWrapper,
  ArticleSvg,
  ArticleDefs,
  ArticleStop,
  ArticleMask,
  ArticleRect,
  ArticleText,
} from './styles'

class ArticleCard extends React.Component {
  render() {
    const { body, title, id } = this.props
    const textBodySubstring = body.substring(0, 200)

    return (
      <ArticlePost>
        <ArticleHeading>{title}</ArticleHeading>
        <ArticlePicWrapper>
          <ArticlePic src={pic} />
          <ArticleSvg width='100%' height='300px'>
            <ArticleDefs>
              <linearGradient id='gradient' gradientTransform='rotate(75)'>
                <ArticleStop offset='15%' stopColor='#fff' />
                <ArticleStop offset='80%' stopColor='#1F2129' />
              </linearGradient>
              <ArticleMask id='mask'>
                <ArticleRect width='100%' height='100%' fill='#fff' />
                <ArticleText x='10%' y='25%' fontSize='2em' fontWeight='300'>
                  Blog post
                </ArticleText>
                <ArticleText
                  x='10%'
                  y='60%'
                  fontSize='6em'
                  letterSpacing='5'
                  fontWeight='800'
                >
                  Example
                </ArticleText>
              </ArticleMask>
            </ArticleDefs>
            <ArticleRect
              width='100%'
              height='100%'
              fill='url(#gradient)'
              fillOpacity='0.8'
              mask='url(#mask)'
            />
          </ArticleSvg>
        </ArticlePicWrapper>
        <ArticleContentWrapper>
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
