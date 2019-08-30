import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import articleListReducer from './reducer'

const store = createStore(
  combineReducers({
    articleListReducer,
  }),
  compose(
    applyMiddleware(ReduxThunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

export { store }
