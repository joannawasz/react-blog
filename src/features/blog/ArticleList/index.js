import React from 'react'
import moment from 'moment'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { Button1 } from '../../../constants/styles'
import { ArticleWrapper, ArticleListPage } from './styles'
import { API_URL, errorMessage } from '../../../config'
import NewPost from '../NewPost'
import SideBar from '../SideBar'
import ArticleCard from '../ArticleCard'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      loadNewPost: false,
      articles: [],
      total: 0,
      isShowing: false,
    }
    this.showMore = this.showMore.bind(this)
  }

  componentDidMount() {
    this.showMore()
  }

  showSideBar = () => {
    const { isShowing } = this.state
    this.setState({
      isShowing: !isShowing,
    })
  }

  addNewPost = async newPost => {
    const { articles } = this.state
    this.setState({
      loadNewPost: true,
    })
    try {
      const date = moment().format('YYYY-MM-DD')
      const newPostFull = {
        ...newPost,
        created_at: date,
        id: (articles.length + 1).toString(),
        modified_at: '-',
      }
      axios.post(`${API_URL}posts`, newPostFull).then(({ data }) => {
        this.setState(state => ({
          articles: [data, ...state.articles],
          loadNewPost: false,
        }))
      })
    } catch (error) {
      errorMessage()
    }
  }

  async showMore() {
    this.setState({
      loading: true,
    })
    const { data } = await axios.get(`${API_URL}posts`)
    try {
      this.setState(state => {
        const { articles } = state
        const fetchedArticles = data.slice(articles.length, articles.length + 3)
        return {
          total: data.length,
          loading: false,
          articles: [...articles, ...fetchedArticles],
        }
      })
    } catch (error) {
      this.errorMessage()
    }
  }

  render() {
    const { loading, total, articles, isShowing, loadNewPost } = this.state
    return (
      <ArticleListPage>
        {isShowing && <SideBar />}
        {loading && <p>loading paragraph - zrob jako spinner</p>}
        {loadNewPost && <ToastContainer />}
        <Button1 onClick={this.showSideBar}>hop siup</Button1>
        <NewPost onSubmit={this.addNewPost} />
        <ArticleWrapper>
          {articles.map(data => (
            <ArticleCard {...data} key={data.id} />
          ))}
        </ArticleWrapper>
        {articles.length < total && (
          <Button1 onClick={this.showMore}>Show More</Button1>
        )}
      </ArticleListPage>
    )
  }
}

export default ArticleList
