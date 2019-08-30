import React from 'react'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './config/store'
import './layouts/index.scss'
import App from './layouts'

toast.configure({
  position: toast.POSITION.TOP_LEFT,
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
)
