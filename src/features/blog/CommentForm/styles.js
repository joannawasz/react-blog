import styled from 'styled-components'
import theme from '../../../theme/theme'
import { breakpoints } from '../../../constants'

const CommentFormBox = styled.form`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;

  @media (max-width: ${breakpoints.lg}px) {
    flex-direction: column;
  }
`

const CommentInput = styled.input`
  padding-left: 10px;

  width: 32.5%;
  height: 50px;

  font-size: 20px;
  font-family: 'Montserrat';
  color: ${theme.color.lightGray};

  border: none;
  border-bottom: 1px solid grey;

  background-color: transparent;

  &:focus {
    outline: 0;
  }

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    margin-bottom: calc(${theme.size.gutter} * 2);
  }
`

const CommentTextArea = styled.textarea`
  display: flex;

  padding-left: 10px;

  width: 32.5%;
  height: 50px;

  font-size: 20px;
  line-height: 2.5;
  font-family: 'Montserrat';
  color: ${theme.color.lightGray};

  border: none;
  border-bottom: 1px solid grey;

  background-color: transparent;

  &:focus {
    outline: 0;
  }

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
    margin-bottom: calc(${theme.size.gutter} * 2);
  }
`

const CommentButton = styled.div`
  width: 25%;
  height: 56px;

  button {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`

export { CommentFormBox, CommentInput, CommentTextArea, CommentButton }
