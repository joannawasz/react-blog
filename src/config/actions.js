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
  ADD_COMMENT,
  GET_POST,
  SET_COMMENTS,
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

    const newPostFull = {
      ...newPost,
      created_at: date,
      modified_at: '-',
    }

    axios.post(`${API_URL}posts`, newPostFull).then(({ data }) => {
      const newArticles = [
        {
          ...data,
          id: newTotal,
        },
        ...articles,
      ]

      dispatch(addNewPostSuccessAction(newArticles, newTotal))
    })
  } catch {
    toast('Problem occurred, sorry!')
  }
}

const getPostAction = post => ({
  type: GET_POST,
  payload: post,
})

const setCommentsAction = comments => ({
  type: SET_COMMENTS,
  payload: { comments },
})

export const getPost = postId => async (dispatch, getState) => {
  const { articles } = getState().articleListReducer
  const article = articles.find(post => post.id === +postId)

  if (article == null) {
    try {
      const { data } = await axios.get(`${API_URL}posts/${postId}`)
      dispatch(getPostAction(data))
    } catch (error) {
      console.log(error)
    }
  } else {
    dispatch(getPostAction(article))
  }

  try {
    const { data } = await axios.get(`${API_URL}comments?postId=${postId}`)
    dispatch(setCommentsAction(data))
  } catch (error) {
    console.log(error)
  }
}

const addCommentAction = comments => ({
  type: ADD_COMMENT,
  payload: { comments },
})

export const addComment = data => (dispatch, getState) => {
  const { comments } = getState().selectedPostReducer
  const newComment = {
    ...data,
    post_id: comments.postId,
    id: comments.length + 1,
  }
  console.log(data, newComment)

  dispatch(addCommentAction([...comments, newComment]))
}
