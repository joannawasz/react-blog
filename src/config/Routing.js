import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ArticleList from '../features/blog/ArticleList'
import ArticlePage from '../features/blog/ArticlePage'
import NewPost from '../features/blog/NewPost'

const Routing = () => (
  <BrowserRouter>
    <Route path="/" exact component={ArticleList} />
    <Route path="/post/:id" component={ArticlePage} />
    <Route path="/new" component={NewPost} />
  </BrowserRouter>
)

export default Routing
