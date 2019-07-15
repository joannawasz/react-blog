import styled from 'styled-components'

const ArticlePost = styled.div `
    break-inside: avoid-column;
    padding: 20px;
    margin: 20px 0;
    max-width: 500px;
    background-color: #fff;
    &:nth-of-type(1) {
        margin: 0;
    }
`

const ArticleHeading = styled.div `
    position: absolute;

    top: -63px;
    left: 10%;
    width: 80%;

    padding: 10px 0;

    background: rgba(0, 0, 0, 0.65);
    color: white;

    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
`

const ArticleInfo = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 12px;
    
    span {
        font-size: 16px; 
    }
`

const ArticleBody = styled.div `
    text-align: justify;
    margin-top: 20px;
`

const ArticlePic = styled.img `
    background-size: cover;
    width: 100%;
    opacity: 0.7;
`

const ArticleContentWrapper = styled.div `
    position: relative;
    padding: 0 20px;
`

const ArticleButton = styled.div `
    margin-top: 30px;
    padding: 0 20px;
    width: fit-content;
    transition: .5s all ease;
    &:hover {
        transform: translateX(10px);
        a {
            color: #027BFF;
        }
    }
    a {
        text-decoration: none !important;
        color: #000;
    }
`

export {
    ArticlePost,
    ArticleBody,
    ArticleHeading,
    ArticleInfo,
    ArticlePic,
    ArticleContentWrapper,
    ArticleButton
}
