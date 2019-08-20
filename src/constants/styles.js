import styled from 'styled-components'

const Button1 = styled.button`
  border: none;
  background: none;

  font-family: 'Montserrat';

  color: pink;
  font-size: 22px;

  transition: 0.5s all ease;

  cursor: pointer;

  &:hover {
    color: #ff6681;
  }

  &:focus {
    outline: 0;
  }
`

const Button2 = styled.button`
  padding: 0 40px;
  height: 56px;

  font-size: 20px;
  font-family: 'Montserrat';
  color: pink;

  border: none;
  border-radius: 10px;

  color: white;
  background-color: pink;

  box-shadow: 0px 0px 10px pink;
  opacity: 0.8;

  transition: 0.5s all ease;
  cursor: pointer;

  &:focus {
    transform: scale(0.95);
    outline: 0;

    color: white;
    background-color: #ff6681;

    opacity: 0.8;
    box-shadow: 0px 0px 10px #ff6681;
  }
`

export { Button1, Button2 }
