import React, { useState } from 'react'
import moment from 'moment'

import NewPost from '../NewPost'
import SideBar from '../SideBar'
import ArticleCard from '../ArticleCard'

import { fakeData } from '../../../constants/mocks'
import { Button1 } from '../../../constants/styles'

import { ArticleWrapper, ArticleListPage } from './styles'

const ArticleList = () => {
  const [ articleList, setArticleList ] = useState(fakeData)
  const [ isShowing, setIsShowing ] = useState(false)

  const date = moment().format('YYYY-MM-DD')
  console.log(date)

  const showSideBar = () => {
    setIsShowing(value => !value)
  }

  const addNewPost = newPost => {
    setArticleList(articleList => [
      ...articleList,
      {
        ...newPost,
        id: (articleList.length + 1).toString(),
        created_at: date
      }
    ])
  }

  return (
    <ArticleListPage>
      {isShowing &&
        <SideBar onClick={showSideBar} />
      }
      <Button1 onClick={showSideBar}>hop siup</Button1>
      <NewPost onSubmit={addNewPost} />
      <ArticleWrapper>
        {articleList.map(data => <ArticleCard {...data} key={data.id} />)}
      </ArticleWrapper>
    </ArticleListPage>
  )
}

export default ArticleList
