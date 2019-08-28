/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import {
  SHOW_SIDEBAR,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_SUCCESS,
  ADD_NEW_POST_STARTED,
  ADD_NEW_POST_SUCCESS,
} from './actionTypes'
import { API_URL } from './index'

const errorMessage = () =>
  toast('Problem occurred, sorry!', {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })

const showSidebarAction = () => ({
  type: SHOW_SIDEBAR,
})

export const showSidebar = () => dispatch => {
  dispatch(showSidebarAction())
}

const fetchArticlesFailedAction = () => ({
  type: FETCH_ARTICLES_FAILED,
})

const fetchArticlesStartedAction = loading => ({
  type: FETCH_ARTICLES_STARTED,
  payload: { loading },
})

const fetchArticlesSuccessAction = (articles, total) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: {
    articles,
    total,
  },
})

export const fetchArticles = () => async (dispatch, getState) => {
  dispatch(fetchArticlesStartedAction())
  try {
    const { data } = await axios.get(`${API_URL}posts`)
    const { articles } = getState().mainReducer
    const fetchedArticles = data.slice(articles.length, articles.length + 2)
    const newArticles = [...articles, ...fetchedArticles]
    const total = data.length

    dispatch(fetchArticlesSuccessAction(newArticles, total))
  } catch {
    dispatch(fetchArticlesFailedAction())

    errorMessage()
  }
}

const addNewPostStartedAction = () => ({
  type: ADD_NEW_POST_STARTED,
})

const addNewPostSuccessAction = articles => ({
  type: ADD_NEW_POST_SUCCESS,
  payload: { articles },
})

export const addNewPost = newPost => async (dispatch, getState) => {
  dispatch(addNewPostStartedAction())
  try {
    const { articles, total } = getState().mainReducer
    const date = moment().format('YYYY-MM-DD')

    const newPostFull = {
      ...newPost,
      created_at: date,
      modified_at: '-',
      id: total + 1,
    }

    axios.post(`${API_URL}posts`, newPostFull).then(({ data }) => {
      dispatch(addNewPostSuccessAction([data, ...articles]))
    })
  } catch {
    errorMessage()
  }
}
