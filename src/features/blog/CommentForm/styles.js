import styled from 'styled-components'

const CommentFormBox = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

const CommentInput = styled.input`
  width: 35%;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  font-family: 'Montserrat';
  border: none;
  border-bottom: 1px solid grey;
  &:focus {
    outline: 0;
  }
`

const CommentTextArea = styled.textarea`
  width: 35%;
  height: 50px;
  font-size: 20px;
  line-height: 2.5;
  padding-left: 10px;
  font-family: 'Montserrat';
  display: flex;
  border: none;
  border-bottom: 1px solid grey;
  &:focus {
    outline: 0;
  }
`

const CommentButton = styled.button`
  width: 20%;
  height: 56px;
  font-size: 20px;
  font-family: 'Montserrat';
  border: none;
  color: pink;
  border-radius: 10px;
  color: white;
  background-color: pink;
  opacity: 0.8;
  box-shadow: 0px 0px 10px pink;
  opacity: 0.8;
  cursor: pointer;
  transition: .5s all ease;
  /* &:hover {
    color: white;
    background-color: pink;
    opacity: 0.8;
    box-shadow: 0px 0px 10px pink;
  } */
  &:focus {
    transform: scale(.95);
    outline: 0;
    color: white;
    background-color: #ff6681;
    opacity: 0.8;
    box-shadow: 0px 0px 10px #ff6681;
  }
`

export {
  CommentFormBox,
  CommentInput,
  CommentTextArea,
  CommentButton
}
