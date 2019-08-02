import React from 'react'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import {ArticleWrapper } from './styles'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      articles: [],
      total: 0
    }

    this.showMore = this.showMore.bind(this)
  }

  showMore() {
    this.setState(state => {
      const { articles } = state
      const fetchedArticles = fakeData.slice(articles.length, articles.length + 2)
      return {
        total: fakeData.length,
        articles: [...articles, ...fetchedArticles]
      }
    })
  }

  componentWillMount() {
    this.showMore()
  }

  render() {
    const {
      loading,
      total,
      articles
    } = this.state
    return (
      <ArticleWrapper>
        {articles
          .map(articles => <ArticleCard {...articles} key={articles.id} />)
        }
        {articles.length < total &&
          <button onClick={this.showMore}>
              Show More
          </button>
        }
      </ArticleWrapper>
    )
  }
}

export default ArticleList
