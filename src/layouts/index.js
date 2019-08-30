import React from 'react'
import { toast } from 'react-toastify'
import './index.scss'
import Routing from '../config/Routing'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  position: toast.POSITION.TOP_LEFT,
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})

const App = () => {
  return <Routing />
}

export default App
