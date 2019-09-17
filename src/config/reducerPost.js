import { GET_POST, SET_COMMENTS, ADD_COMMENT } from './actionTypes'

const postState = {
  body: '',
  id: 1,
  title: '',
  comments: [],
}

const selectedPostReducer = (state = postState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_POST:
      return {
        ...state,
        ...payload,
      }
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload.comments,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: payload.comments,
      }
    default:
      return state
  }
}

export default selectedPostReducer
