import styled from 'styled-components'
import theme from '../../../theme/theme'
import { breakpoints } from '../../../constants'
import { innerStyled, captionStyled } from '../../../constants/styles'

const ArticlePageWrapper = styled.div`
  position: relative;

  &:before {
    ${captionStyled}
    position: absolute;
    content: 'mountains';

    top: 0;
    left: ${theme.size.gutter};

    margin-top: calc(${theme.size.gutter} * 2.5);
    font-size: 150px;

    writing-mode: vertical-lr;
    -webkit-writing-mode: vertical-lr;

    @media (max-width: ${breakpoints.md}px) {
      width: calc(100% - 40px);
    }
  }
`

const ArticlePageBox = styled.div`
  ${innerStyled}
`

const ArticleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: calc(${theme.size.gutter} * 3);
`

const ArticleCommentsWrapper = styled.div``

const ArticleLinkWrapper = styled.div``

export {
  ArticlePageWrapper,
  ArticlePageBox,
  ArticleButtonWrapper,
  ArticleCommentsWrapper,
  ArticleLinkWrapper,
}
