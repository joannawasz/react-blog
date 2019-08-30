import {
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
}

const articleListReducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
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
        total: payload.total,
        loadNewPost: false,
      }
    default:
      return state
  }
}

export default articleListReducer
