import React from 'react'
import {  } from './styles'
import styled from 'styled-components'

const SideBarWrapper = styled.div`
  position: fixed;
  background: #fff;
  box-shadow: -1px 0px 3px 0px rgba(0,0,0,0.4);
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 1;
  transform: translateX(90%);
  transition: .5s all ease;
  &.is-visible {
    transform: translateX(0)
  }
`

const SideBarClose = styled.div`
`

const open = () => {
  const element = document.querySelector('.sidebar-close')

  if ( element.classList.contains('is-visible') === true) {
    element.classList.remove('is-visible')
  }
  else {
    element.classList.add('is-visible')
  }
}

const SideBar = () => {
  return (
    <SideBarWrapper className='sidebar-close'>
      <SideBarClose onClick={open}>
        X
      </SideBarClose>
      asdasd
    </SideBarWrapper>
  )
}

export default SideBar
