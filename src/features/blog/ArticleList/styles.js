import styled from 'styled-components'
import { breakpoints } from '../../../constants'

const ArticleWrapper = styled.div `
    column-count: 2;
    margin: 0 auto;
    max-width: 1120px;
    @media (max-width: ${breakpoints.lg}px) {
        column-count: unset;
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;   
    }
`

export {
    ArticleWrapper
}
