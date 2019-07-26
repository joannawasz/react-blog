import React from 'react'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import { ArticleWrapper, ArticleListPage, AddNewPostWrapper } from './styles'
import { Link } from 'react-router-dom'

const ArticleList = () => (
  <ArticleListPage>
      <AddNewPostWrapper>
        <Link to={`/new-post`}>
          Add new post
        </Link>
      </AddNewPostWrapper>
    <ArticleWrapper>
      {fakeData.map(data => <ArticleCard {...data} key={data.id} />)}
    </ArticleWrapper>
  </ArticleListPage>
)

export default ArticleList
