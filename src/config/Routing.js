import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ArticleList from '../features/blog/ArticleList'
import ArticlePage from '../features/blog/ArticlePage'

const Routing = () => (
    <BrowserRouter>
        <Route path='/' exact component={ArticleList}/>
        <Route path='/post/:id' component={ArticlePage} />
    </BrowserRouter>
)

export default Routing
