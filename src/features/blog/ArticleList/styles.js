import styled from 'styled-components'
import { breakpoints } from '../../../constants'

const ArticleListPage = styled.div`
`

const ArticleWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: -20px;
    margin-right: -20px;
    @media (max-width: ${breakpoints.lg}px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
        margin-right: 0;
    }
`

const AddNewPost = styled.a`
    font-size: 22px;
    font-family: 'Montserrat';
    padding: 10px 30px;
    border-radius: 20px;
    border: 1px solid pink;
    cursor: pointer;
`

const AddNewPostWrapper = styled.div`
    margin-top: 40px;
`

export {
    ArticleWrapper,
    AddNewPost,
    ArticleListPage,
    AddNewPostWrapper
}
