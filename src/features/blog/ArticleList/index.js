import React from 'react'
// import ReactPaginate from 'react-paginate'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import {ArticleWrapper } from './styles'

const ArticleList = () => (
    <ArticleWrapper>
      {fakeData.map(data => <ArticleCard {...data} key={data.id} />)}
    </ArticleWrapper>
)

export default ArticleList
