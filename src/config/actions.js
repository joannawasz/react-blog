/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import {
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_SUCCESS,
  ADD_NEW_POST_STARTED,
  ADD_NEW_POST_SUCCESS,
} from './actionTypes'
import { API_URL } from './index'

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
    const { articles } = getState().articleListReducer
    const fetchedArticles = data.slice(articles.length, articles.length + 2)
    const newArticles = [...articles, ...fetchedArticles]
    const total = data.length

    dispatch(fetchArticlesSuccessAction(newArticles, total))
  } catch {
    dispatch(fetchArticlesFailedAction())

    toast('Problem occurred, sorry!')
  }
}

const addNewPostStartedAction = () => ({
  type: ADD_NEW_POST_STARTED,
})

const addNewPostSuccessAction = (articles, total) => ({
  type: ADD_NEW_POST_SUCCESS,
  payload: {
    articles,
    total,
  },
})

export const addNewPost = newPost => async (dispatch, getState) => {
  dispatch(addNewPostStartedAction())
  try {
    const { articles, total } = getState().articleListReducer
    const date = moment().format('YYYY-MM-DD')
    const newTotal = total + 1
    console.log(total, 'total', newTotal, 'new total')

    const newPostFull = {
      ...newPost,
      created_at: date,
      modified_at: '-',
    }
    console.log({ newPost }, { newPostFull })
    console.log(newPostFull.id, 'added post id')
    axios.post(`${API_URL}posts`, newPostFull).then(({ data }) => {
      const newArticles = [
        {
          ...data,
          id: newTotal + 1,
        },
        ...articles,
      ]
      console.log(data)

      dispatch(addNewPostSuccessAction(newArticles, newTotal))
    })
  } catch {
    toast('Problem occurred, sorry!')
  }
}
