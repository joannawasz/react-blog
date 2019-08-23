import styled from 'styled-components'
import theme from '../../../theme/theme'

const Post = styled.div`
  position: relative;

  padding: 100px 0 60px;

  z-index: 3;
`

const PostHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`

const PostPic = styled.img`
  right: 0;
  width: 100%;
  align-self: center;
  background-size: cover;
`

const PostInfoWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`

const PostHeading = styled.h2`
  position: relative;
  width: fit-content;

  font-family: 'Roboto';
  font-size: 50px;

  color: ${theme.color.cyan};

  text-transform: capitalize;
  z-index: 3;

  &:before {
    position: absolute;
    display: block;
    content: '';

    left: 0;
    bottom: 0;

    width: 100%;
    height: 20px;

    background-color: ${theme.color.gray};
    z-index: -1;
  }
`

const PostDate = styled.p`
  span {
    font-size: 14px;
    margin-left: 20px;
  }
`

const PostAuthor = styled.p``

const PostBack = styled.div`
  width: fit-content;
  transition: 0.5s all ease;

  &:hover {
    transform: translateX(-10px);
    a {
      color: ${theme.color.cyan};
    }
  }

  a {
    text-decoration: none !important;
    color: ${theme.color.white};
  }
`

const PostBody = styled.p`
  margin-top: 100px;
  font-size: 20px;
  line-height: 2em;
  text-align: justify;
`

export {
  Post,
  PostHeading,
  PostInfoWrapper,
  PostDate,
  PostAuthor,
  PostHeaderWrapper,
  PostPic,
  PostBody,
  PostBack,
}
