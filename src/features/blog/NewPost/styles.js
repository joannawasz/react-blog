import styled from 'styled-components'

const NewPostForm = styled.form`
  margin-top: 60px;
  text-align: center;
`

const NewPostInput = styled.input`
  margin-bottom: 40px;
  padding-left: 20px;

  width: calc(100% - 20px);
  height: 50px;

  font-family: 'Montserrat';
  font-size: 16px;

  &:focus {
      outline: 0;
  }
`

const NewPostTextArea = styled.textarea`
  margin-bottom: 40px;
  padding: 20px;

  width: calc(100% - 40px);
  height: 80px;

  font-size: 16px;
  font-family: 'Montserrat';
  line-height: 2;

  &:focus {
      outline: 0;
  }
`

const NewPostButton = styled.div`
  margin: 0 auto 40px;

  width: 100%;
  max-width: 300px;

  button {
    width: 100%;
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
