import { createSelector } from 'reselect'

const getPostsListSelector = (state, id) =>
  state.articles.find(post => post.id === +id)

export const getPostsSelector = createSelector(
  [getPostsListSelector],
  post => post,
)
