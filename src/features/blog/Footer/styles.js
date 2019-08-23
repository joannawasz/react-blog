import styled from 'styled-components'
import theme from '../../../theme/theme'
import { breakpoints } from '../../../constants/index'
import { decorHeading, captionStyled } from '../../../constants/styles'

const FooterBox = styled.div`
  position: relative;

  padding: calc(${theme.size.gutter} * 5) 0;

  text-align: center;
  background-color: ${theme.color.navyGray};
  z-index: 1;

  &:after,
  &:before {
    ${captionStyled}

    bottom: 20px;
  }

  &:before {
    content: '← Last Post';
    left: calc(${theme.size.gutter} * 3.5);
  }

  &:after {
    content: 'Next Post →';
    right: calc(${theme.size.gutter} * 3.5);
  }

  &.footerArticleList:before,
  &.footerArticleList:after {
    display: none;
  }

  @media (max-width: ${breakpoints.lg}px) {
    &:after,
    &:before {
      font-size: 5vw;
      bottom: calc(${theme.size.gutter} * 2.5);
    }
    &:before {
      left: calc(${theme.size.gutter} * 1.5);
    }

    &:after {
      right: calc(${theme.size.gutter} * 1.5);
    }
  }
`

const FooterText = styled.div`
  position: relative;

  &:before,
  &:after {
    display: block;
    content: '';

    position: absolute;
    left: calc(50% - 0.5px);

    width: 1px;
    height: 50px;

    background-color: ${theme.color.white};
  }

  &:before {
    top: calc(-${theme.size.gutter} * 3);
  }

  &:after {
    top: calc(${theme.size.gutter} * 3);
  }

  a {
    &:first-child {
      margin-right: calc(${theme.size.gutter} * 2);
    }

    &:last-child {
      margin-left: calc(${theme.size.gutter} * 2);
    }

    ${decorHeading}
  }
`

export { FooterBox, FooterText }
