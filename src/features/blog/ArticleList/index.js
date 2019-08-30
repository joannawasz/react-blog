/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'proptypes'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'
import { ButtonOnClick } from '../../../constants/styles'
import NewPost from '../NewPost'
import ArticleCard from '../ArticleCard'
import Footer from '../Footer'
import {
  ArticleWrapper,
  ArticleListPage,
  ArticleButton,
  ArticleListWrapper,
} from './styles'
import { addNewPost, fetchArticles } from '../../../config/actions'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
    }
  }

  componentDidMount() {
    const { fetchArticles } = this.props

    fetchArticles()
  }

  showSidebar = () => {
    const { isShowing } = this.state
    this.setState({
      isShowing: !isShowing,
    })
  }

  render() {
    const { isShowing } = this.state
    const {
      fetchArticles,
      addNewPost,
      loadNewPost,
      loading,
      articles,
      total,
    } = this.props
    return (
      <ArticleListPage>
        {loading && <p>loading paragraph - zrob jako spinner</p>}
        <ArticleListWrapper>
          {loadNewPost && <ToastContainer />}
          <ArticleButton>
            <ButtonOnClick onClick={this.showSidebar}>
              Add new post
            </ButtonOnClick>
          </ArticleButton>
          {isShowing && <NewPost onSubmit={addNewPost} />}
          <ArticleWrapper>
            {articles.map(data => (
              <ArticleCard {...data} key={data.id} />
            ))}
          </ArticleWrapper>
        </ArticleListWrapper>
        {articles.length < total && (
          <Footer className='footerArticleList'>
            <ArticleButton onClick={fetchArticles}>Show More</ArticleButton>
          </Footer>
        )}
      </ArticleListPage>
    )
  }
}

ArticleList.propTypes = {
  total: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  addNewPost: PropTypes.func.isRequired,
  loadNewPost: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  total: state.articleListReducer.total,
  loading: state.articleListReducer.loading,
  articles: state.articleListReducer.articles,
  loadNewPost: state.articleListReducer.loadNewPost,
})

export default connect(
  mapStateToProps,
  {
    fetchArticles,
    addNewPost,
  },
)(ArticleList)
