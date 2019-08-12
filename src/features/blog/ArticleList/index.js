import React from 'react'
import moment from 'moment'
import axios from 'axios'
import { Button1 } from '../../../constants/styles'
import { ArticleWrapper, ArticleListPage } from './styles'
import { API_URL } from '../../../config'
import NewPost from '../NewPost'
import SideBar from '../SideBar'
import ArticleCard from '../ArticleCard'
import { ToastContainer, toast } from 'react-toastify';

class ArticleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      loadNewPost: false,
      articles: [],
      total: 0,
      isShowing: false
    }

    this.showMore = this.showMore.bind(this)
  }

  errorMessage = () => toast(
    'Problem occurred, sorry!',
    {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
  })

  showSideBar = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  addNewPost = async(newPost) => {
    this.setState({
      loadNewPost: true
    })
    try {
      const date = moment().format('YYYY-MM-DD')
      const newPostFull = {
        ...newPost,
        created_at: date,
        id: (this.state.articles.length + 1).toString(),
        modified_at: '-'
      }
      axios.post(`${API_URL}posts`, newPostFull).then(({data}) => {
        this.setState(state => ({
          articles: [data, ...state.articles],
          loadNewPost: false
        }))
      })
    } catch (error) {
      this.errorMessage()
    }
  }

  async showMore() {
    this.setState({
      loading: true
    })
    const { data } = await axios.get(`${API_URL}posts`)
    try {
      this.setState(state => {
        const { articles } = state
        const fetchedArticles = data.slice(articles.length, articles.length + 3)
        return {
          total: data.length,
          loading: false,
          articles: [...articles, ...fetchedArticles]
        }
      })
    } catch (error) {
      this.errorMessage()
    }
  }

  componentDidMount() {
    this.showMore()
  }

  render() {
    const {
      loading,
      total,
      articles,
      isShowing,
      loadNewPost
    } = this.state
    return (
      <ArticleListPage>
        {isShowing &&
          <SideBar />
        }
        {loading &&
          <p>loading paragraph</p>
        }
        {loadNewPost &&
          <ToastContainer />
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
