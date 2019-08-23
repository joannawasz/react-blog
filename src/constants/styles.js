import styled from 'styled-components'
import theme from '../theme/theme'

const Button1 = styled.button`
  border: none;
  background: none;

  font-family: 'Montserrat';

  color: ${theme.color.cyan};
  font-size: 22px;

  transition: 0.5s all ease;

  cursor: pointer;

  &:hover {
    color: ${theme.color.darkCyan};
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
  color: ${theme.color.cyan};

  border: none;
  border-radius: 10px;

  color: white;
  background-color: ${theme.color.cyan};

  box-shadow: 0px 0px 10px ${theme.color.cyan};

  transition: 0.5s all ease;
  cursor: pointer;

  &:focus {
    transform: scale(0.95);
    outline: 0;

    color: white;
    background-color: ${theme.color.darkCyan};

    box-shadow: 0px 0px 10px ${theme.color.darkCyan};
  }
`

const Button3 = styled.button`
  border: none;
  background: none;

  font-family: 'Montserrat';

  color: ${theme.color.cyan};
  font-size: 22px;

  transition: 0.5s all ease;

  cursor: pointer;

  &:hover {
    color: ${theme.color.darkCyan};
  }

  &:focus {
    outline: 0;
  }
`

const decorHeading = `
  position: relative;
  font-size: 30px;
  font-family: 'Muli';

  color: white;
  text-decoration: none;

  transition: all .3s ease;
  z-index: 3;

  &:before {
    position: absolute;
    display: block;
    content: '';

    left: 0;
    bottom: 0;

    width: 100%;
    height: 0;

    background-color: #999;

    transition: all .3s ease;
    z-index: -1;
  }

  &:hover {
    color: #b3f7ff;
  }

  &:hover:before {
    height: 15px;
  }
}
`

const innerStyled = `
  position: relative;
  max-width: 1024px;

  padding: 0 50px;
  margin: 0 auto;

  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const captionStyled = `
  position: absolute;
  display: block;

  font-family: 'Muli', sans-serif;
  font-weight: 900;
  font-size: 7vw;

  line-height: 1;
  color: rgba(200,200,200,.1);
  text-align: left;

  background: linear-gradient(rgba(75, 77, 100,0.25), rgba(75, 77, 100,0));

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  z-index: -1;
`

export { Button1, Button2, Button3, decorHeading, innerStyled, captionStyled }
