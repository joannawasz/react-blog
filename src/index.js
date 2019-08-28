import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './config/reducer'
import './layouts/index.scss'
import App from './layouts'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
)
