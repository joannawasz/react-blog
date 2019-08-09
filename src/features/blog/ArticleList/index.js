import React from 'react'
import moment from 'moment'
import axios from 'axios'

import { Button1 } from '../../../constants/styles'

import { ArticleWrapper, ArticleListPage } from './styles'

import { API_URL } from '../../../config'

import NewPost from '../NewPost'
import SideBar from '../SideBar'
import ArticleCard from '../ArticleCard'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      articles: [],
      total: 0,
      isShowing: false
    }

    this.showMore = this.showMore.bind(this)
  }

  showSideBar = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  addNewPost = newPost => {
    const date = moment().format('YYYY-MM-DD')
    const newPostFull = {
      ...newPost,
      created_at: date,
      id: (this.state.articles.length + 1).toString(),
      modified_at: '-'
    }
    axios.post(`${API_URL}posts`, newPostFull).then(({data}) => {
      this.setState(state => ({
        articles: [data, ...state.articles]
      }))
    })
  }

  async showMore() {
    this.setState({
      loading: true
    })
    const { data } = await axios.get(`${API_URL}posts`)
    this.setState(state => {
      const { articles } = state
      const fetchedArticles = data.slice(articles.length, articles.length + 3)
      return {
        total: data.length,
        articles: [...articles, ...fetchedArticles]
      }
    })
    this.setState({
      loading: false
    })
  }


  componentDidMount() {
    this.showMore()
  }

  render() {
    const {
      loading,
      total,
      articles,
      isShowing
    } = this.state
    return (
      <ArticleListPage>
        {isShowing &&
          <SideBar />
        }
        <Button1 onClick={this.showSideBar}>hop siup</Button1>
        <NewPost onSubmit={this.addNewPost} />
        <ArticleWrapper>
          {articles
            .map(articles => <ArticleCard {...articles} key={articles.id} />)
          }
        </ArticleWrapper>
        {articles.length < total &&
          <Button1 onClick={this.showMore}>
              Show More
          </Button1>
        }
      </ArticleListPage>
    )
  }
}

export default ArticleList
