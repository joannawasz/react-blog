import React from 'react'
import moment from 'moment'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { ButtonOnClick } from '../../../constants/styles'
import { API_URL } from '../../../config'
import NewPost from '../NewPost'
import ArticleCard from '../ArticleCard'
import Footer from '../Footer'
import {
  ArticleWrapper,
  ArticleListPage,
  ArticleButton,
  ArticleListWrapper,
} from './styles'

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

  errorMessage = () =>
    toast('Problem occurred, sorry!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

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
      this.errorMessage()
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
        {loading && <p>loading paragraph - zrob jako spinner</p>}
        <ArticleListWrapper>
          {loadNewPost && <ToastContainer />}
          <ArticleButton>
            <ButtonOnClick onClick={this.showSideBar}>
              Add new post
            </ButtonOnClick>
          </ArticleButton>
          {isShowing && <NewPost onSubmit={this.addNewPost} />}
          <ArticleWrapper>
            {articles.map(data => (
              <ArticleCard {...data} key={data.id} />
            ))}
          </ArticleWrapper>
        </ArticleListWrapper>
        {articles.length < total && (
          <Footer className='footerArticleList'>
            <ArticleButton onClick={this.showMore}>Show More</ArticleButton>
          </Footer>
        )}
      </ArticleListPage>
    )
  }
}

export default ArticleList
