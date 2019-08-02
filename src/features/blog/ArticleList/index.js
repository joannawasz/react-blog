import React from 'react'
import { fakeData } from './mocks'
import ArticleCard from '../ArticleCard'
import {ArticleWrapper } from './styles'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      total: 0
    }

    this.showMore = this.showMore.bind(this)
  }

  showMore() {
    this.setState((prev) => {
      return {
        total: prev.total + 2,
        data: [...fakeData]
      }
    })
  }

  componentWillMount() {
    this.showMore()
  }

  render() {
    return (
      <ArticleWrapper>
        {this.state.data
          .slice(0, this.state.total)
          .map(data => <ArticleCard {...data} key={data.id} />)
        }
        {this.state.total < this.state.data.length &&
          <button onClick={this.showMore}>
              Show More
          </button>
        }
      </ArticleWrapper>
    )
  }
}

export default ArticleList
