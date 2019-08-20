import styled from 'styled-components'

const Post = styled.div`
  position: relative;

  padding: 100px 0 60px;
`

const PostHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  position: relative;
`

const PostPic = styled.img`
  right: 0;
  width: 60%;
  background-size: cover;
`

const PostInfoWrapper = styled.div`
  position: absolute;

  left: 0;
  bottom: -10%;

  width: 100%;
  max-width: 700px;

  padding: 5% 0;

  background: white;
`

const PostHeading = styled.h2`
  margin-top: 80px;
  margin-bottom: 80px;

  text-transform: uppercase;
  font-size: 32px;
  color: pink;
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
      color: pink;
    }
  }

  a {
    text-decoration: none !important;
    color: #000;
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
