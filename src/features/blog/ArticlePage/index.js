import React, { useState } from 'react'
import { fakeData, comments } from '../ArticleList/mocks'
import ArticleFull from '../ArticleFull/index'
import ArticleComment from '../ArticleComment/index'
import { ArticlePageWrapper, ArticleButton, ButtonWrapper, CommentsWrapper } from './styles'

const ArticlePage = ({ match }) => {
  const article = fakeData.find(doc => doc.id === match.params.id)
  const comment = comments.filter(doc => doc.id === match.params.id)
  const [ isShowing, setIsShowing ] = useState(false)

  const loadComments = () => {
    const el = document.querySelector('.c-comments-wrapper')
    const text = document.querySelector('.js-comments')

    if (isShowing === true) {
      el.style.display = "none"
      text.innerHTML = 'Show Comments'
      setIsShowing(false)
    }
    else {
      el.style.display = "block";
      text.innerHTML = 'Hide Comments'
      setIsShowing(true)
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
