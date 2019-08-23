import styled from 'styled-components'

const SideBarWrapper = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;

  background: #555;
  box-shadow: -1px 0px 3px 0px rgba(0, 0, 0, 0.4);

  width: 300px;

  z-index: 1;
  transition: 0.5s all ease;
`

const SideBarClose = styled.div``

export { SideBarWrapper, SideBarClose }
