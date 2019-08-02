import styled from 'styled-components'
import { breakpoints } from '../../../constants'

const ArticlePost = styled.div`
  padding: 20px;
  margin: 20px 0;

  width: calc(33.3% - 40px);

  background-color: #fff;

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    padding: 0;
  }
`

const ArticleHeading = styled.h2`
  color: pink;
  font-size: 22px;
  text-transform: uppercase;

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 18px;
  }
`

const ArticleInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;

  font-size: 12px;

  span {
    font-size: 14px;
  }
`

const ArticleBody = styled.p`
  margin-top: 20px;

  text-align: justify;
  line-height: 1.5;

  a {
    margin-left: 10px;

    text-decoration: none;
    color: pink;

    transition: 0.5s all ease;

    &:hover {
      margin-left: 20px;
    }
  }
`

const ArticlePic = styled.img`
  background-size: cover;
  width: 100%;
  opacity: 0.7;
`

const ArticleContentWrapper = styled.div`
  position: relative;

  padding: 0 20px;
`

export {
  ArticlePost,
  ArticleBody,
  ArticleHeading,
  ArticleInfo,
  ArticlePic,
  ArticleContentWrapper
}
