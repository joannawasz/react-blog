import styled from 'styled-components'

const Post = styled.div `
    position: relative;
    padding: 150px 0 50px;
`

const PostPic = styled.img `
    position: absolute;
    right: 0;
    width: 60%;
    background-size: cover;
`

const PostInfoWrapper = styled.div `
    z-index: 10;
    position: relative;
    background: white;
    width: 50%;
    margin-top: 15%;
    padding: 60px 0;
`

const PostHeading = styled.h2 `
    text-transform: uppercase;
    font-size: 32px;
    color: pink;
    margin-top: 80px;
    margin-bottom: 80px;
`

const PostDate = styled.p `
    span {
        font-size: 14px;
        margin-left: 20px;
    }
`

const PostAuthor = styled.p `
`

const PostBack = styled.div `
    width: fit-content;
    transition: .5s all ease;
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

const PostBody = styled.p `
    margin-top: 40px;
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
    PostPic,
    PostBody,
    PostBack
}
