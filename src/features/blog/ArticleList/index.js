import React from 'react'
import moment from 'moment'

import { fakeData } from '../../../constants/mocks'
import { Button1 } from '../../../constants/styles'

import { ArticleWrapper, ArticleListPage } from './styles'

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
      id: (this.state.articles.length + 1).toString()
    }
    this.setState(state => ({
      articles: [newPostFull, ...state.articles]
    }))
  }

  showMore() {
    this.setState(state => {
      const { articles } = state
      const fetchedArticles = fakeData.slice(articles.length, articles.length + 3)
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
// const ArticleList = () => {
//   const [ articleList, setArticleList ] = useState(fakeData)
//   const [ isShowing, setIsShowing ] = useState(false)

//   const date = moment().format('YYYY-MM-DD')

//   const showSideBar = () => {
//     setIsShowing(value => !value)
//   }

//   const addNewPost = newPost => {
//     setArticleList(articleList => [
//       ...articleList,
//       {
//         ...newPost,
//         id: (articleList.length + 1).toString(),
//         created_at: date
//       }
//     ])
//   }

//   return (
//     <ArticleListPage>
//       {isShowing &&
//         <SideBar onClick={showSideBar} />
//       }
//       <Button1 onClick={showSideBar}>hop siup</Button1>
//       <NewPost onSubmit={addNewPost} />
//       <ArticleWrapper>
//         {articleList.map(data => <ArticleCard {...data} key={data.id} />)}
//       </ArticleWrapper>
//     </ArticleListPage>
//   )
// }

export default ArticleList
