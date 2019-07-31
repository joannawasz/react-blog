import styled from 'styled-components'

const NewPostForm = styled.form`
  margin-top: 60px;
  text-align: center;
`

const NewPostInput = styled.input`
width: calc(100% - 20px);
  height: 50px;
  margin-bottom: 40px;
  padding-left: 20px;
  font-family: 'Montserrat';
  font-size: 16px;
  &:focus {
      outline: 0;
  }
`

const NewPostTextArea = styled.textarea`
  width: calc(100% - 40px);
  height: 80px;
  margin-bottom: 40px;
  font-size: 16px;
  font-family: 'Montserrat';
  line-height: 2;
  padding: 20px;
  &:focus {
      outline: 0;
  }
`

const NewPostButton = styled.button`
  font-family: 'Montserrat';
  border: 1px solid pink;
  background-color: pink;
  text-transform: uppercase;
  padding: 20px 40px;
  margin-bottom: 40px;
  font-size: 20px;
  transition: .5s all ease;
  color: #fff;
  box-shadow: 0px 0px 10px pink;
  cursor: pointer;
  &:hover {
      /* background-color: #006bde;
      border-color: #006bde;
      color: #fff;
      box-shadow: 0px 0px 10px #006bde; */
  }
  &:focus {
      outline: 0;
  }
`

const NewPostTitle = styled.h2`
  font-size: 16px;
  font-family: 'Montserrat';
  text-align: left;
`

export {
  NewPostForm,
  NewPostInput,
  NewPostTextArea,
  NewPostButton,
  NewPostTitle
}
