import styled from 'styled-components'
import theme from '../../../theme/theme'
import { breakpoints } from '../../../constants'
import { decorHeading } from '../../../constants/styles'

const ArticlePost = styled.div`
  padding: 20px;
  margin: 20px 0;

  width: 100%;

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    padding: 0;
  }
`

const ArticleSvg = styled.svg`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ArticlePicWrapper = styled.div`
  position: relative;
`

const ArticleDefs = styled.defs``

const ArticleStop = styled.stop``

const ArticleMask = styled.mask``

const ArticleRect = styled.rect``

const ArticleText = styled.text``

const ArticleHeading = styled.h2`
  ${decorHeading}

  margin-bottom: ${theme.size.gutter};

  font-family: 'muli';
  text-transform: uppercase;
`

const ArticleBody = styled.p`
  margin-top: 20px;

  text-align: justify;
  line-height: 1.5;

  font-size: 20px;

  a {
    margin-left: 10px;

    text-decoration: none;
    color: ${theme.color.cyan};

    transition: 0.5s all ease;

    &:hover {
      margin-left: 20px;
    }
  }
`

const ArticlePic = styled.img`
  width: 100%;
  height: 300px;

  background-size: cover;

  opacity: 0.7;
  object-fit: cover;
`

const ArticleContentWrapper = styled.div`
  position: relative;

  padding: 0 20px;
`

export {
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
}
