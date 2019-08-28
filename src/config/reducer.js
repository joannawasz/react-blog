import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import {
  SHOW_SIDEBAR,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_STARTED,
  ADD_NEW_POST_STARTED,
  ADD_NEW_POST_SUCCESS,
} from './actionTypes'

const defaultState = {
  loading: false,
  loadNewPost: false,
  articles: [],
  total: 0,
  isShowing: false,
}

const mainReducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isShowing: !state.isShowing,
      }
    case FETCH_ARTICLES_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ARTICLES_FAILED:
      return {
        loading: false,
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: payload.articles,
        total: payload.total,
      }
    case ADD_NEW_POST_STARTED:
      return {
        ...state,
        loadNewPost: true,
      }
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        articles: payload.articles,
        loadNewPost: false,
      }
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    mainReducer,
  }),
  compose(
    applyMiddleware(ReduxThunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

export { store }
