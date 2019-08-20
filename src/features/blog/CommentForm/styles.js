import styled from 'styled-components'

const CommentFormBox = styled.form`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
`

const CommentInput = styled.input`
  padding-left: 10px;

  width: 35%;
  height: 50px;

  font-size: 20px;
  font-family: 'Montserrat';

  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: 0;
  }
`

const CommentTextArea = styled.textarea`
  display: flex;

  padding-left: 10px;

  width: 35%;
  height: 50px;

  font-size: 20px;
  line-height: 2.5;
  font-family: 'Montserrat';

  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: 0;
  }
`

const CommentButton = styled.div`
  width: 20%;
  height: 56px;

  button {
    width: 100%;
    height: 100%;
  }
`

export { CommentFormBox, CommentInput, CommentTextArea, CommentButton }
