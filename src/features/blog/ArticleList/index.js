import React, { useState } from 'react'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import { ArticleWrapper, ArticleListPage, AddNewPostWrapper } from './styles'
// import { Link } from 'react-router-dom'
import NewPost from '../NewPost/index'


const ArticleList = () => {
  const [ articleList, setArticleList ] = useState(fakeData)
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const AddNewPost = newPost => {
    setArticleList(articleList => [
      ...articleList,
      {
        ...newPost,
        id: (articleList.length + 1).toString(),
        created_at: year + '-' + month + '-' + date
      }
    ])
  }

  return (
    <ArticleListPage>
        {/* <AddNewPostWrapper>
          <Link to={`/new-post`}>
            Add new post
          </Link>
        </AddNewPostWrapper> */}
      <NewPost onSubmit={AddNewPost}/>
      <ArticleWrapper>
        {articleList.map(data => <ArticleCard {...data} key={data.id} />)}
      </ArticleWrapper>
    </ArticleListPage>
  )
}

export default ArticleList
