import styled from 'styled-components'
import { breakpoints } from '../../../constants'
import { decorHeading, innerStyled } from '../../../constants/styles'

const ArticleListPage = styled.div``

const ArticleListWrapper = styled.div`
  ${innerStyled}
`

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.lg}px) {
    flex-direction: column;
    align-items: center;

    margin-left: 0;
    margin-right: 0;
  }
`

const AddNewPost = styled.a`
  padding: 10px 30px;

  font-size: 22px;
  font-family: 'Montserrat';

  border-radius: 20px;
  border: 1px solid pink;

  cursor: pointer;
`

const AddNewPostWrapper = styled.div`
  margin-top: 40px;
`

const ArticleButton = styled.span`
  ${decorHeading}
`

export {
  ArticleWrapper,
  ArticleListWrapper,
  AddNewPost,
  ArticleListPage,
  AddNewPostWrapper,
  ArticleButton,
}
