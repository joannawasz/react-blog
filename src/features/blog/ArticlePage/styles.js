import styled from 'styled-components'

const ArticlePageWrapper = styled.div `
    .sc-bdVaJa {
        max-width: 100%;
    }
`

const ArticleButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
`

const ArticleButton = styled.button `
    margin-bottom: 60px;
    /* border: 1px solid #000;
    background-color: #fff;
    text-transform: uppercase; */
    border: none;
    background: none;
    color: pink;
    padding: 20px 0px;
    font-size: 22px;
    transition: .5s all ease;
    cursor: pointer;
    &:hover {
        /* background-color: pink;
        border-color: pink;
        color: #fff;
        box-shadow: 0px 0px 10px pink; */
        color: #ff6681;
    }
    &:focus {
        outline: 0;
    }
`

const ArticleCommentsWrapper = styled.div `
`

export {
    ArticlePageWrapper,
    ArticleButton,
    ArticleButtonWrapper,
    ArticleCommentsWrapper
}
