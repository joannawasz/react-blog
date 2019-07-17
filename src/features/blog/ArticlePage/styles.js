import styled from 'styled-components'

const ArticlePageWrapper = styled.div `
    .sc-bdVaJa {
        max-width: 100%;
    }
`

const ButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
`

const ArticleButton = styled.button `
    margin-bottom: 60px;
    border: 1px solid #000;
    background-color: #fff;
    text-transform: uppercase;
    padding: 20px 40px;
    font-size: 22px;
    transition: .5s all ease;
    &:hover {
        background-color: #027BFF;
        border-color: #027BFF;
        color: #fff;
        box-shadow: 0px 0px 10px #027BFF;
    }
`

const CommentsWrapper = styled.div `
    display: none;
`

export {
    ArticlePageWrapper,
    ArticleButton,
    ButtonWrapper,
    CommentsWrapper
}
