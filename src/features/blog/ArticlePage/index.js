import React from 'react'
import { fakeData, comments } from '../ArticleList/mocks'
import ArticleFull from '../ArticleFull/index'
import ArticleComment from '../ArticleComment/index'
import { ArticlePageWrapper, ArticleButton, ButtonWrapper, CommentsWrapper } from './styles'

const ArticlePage = ({ match }) => {
  const article = fakeData.find(doc => doc.id === match.params.id)
  const comment = comments.filter(doc => doc.id === match.params.id)

  const loadComments = () => {
    const el = document.querySelector('.c-comments-wrapper')
    const text = document.querySelector('.js-comments')

    if (el.style.display === "block") {
      el.style.display = "none"
      text.innerHTML = 'Show Comments'
    } else {
      el.style.display = "block";
      text.innerHTML = 'Hide Comments'
    }
  }
  
  return (
    <ArticlePageWrapper>
      <ArticleFull { ...article } />
      <ButtonWrapper>
        <ArticleButton onClick={loadComments} className="js-comments">
          Show Comments
        </ArticleButton>
      </ButtonWrapper>
      <CommentsWrapper className="c-comments-wrapper">
        {comment.map(data => <ArticleComment {...data} key={data.post_id} />)}
      </CommentsWrapper>
    </ArticlePageWrapper>
  )
}

export default ArticlePage
