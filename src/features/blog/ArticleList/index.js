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
import { showSidebar, addNewPost, fetchArticles } from '../../../config/actions'

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props

    fetchArticles()
  }

  render() {
    const {
      isShowing,
      showSidebar,
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
            <ButtonOnClick onClick={showSidebar}>Add new post</ButtonOnClick>
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
  isShowing: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
  showSidebar: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  addNewPost: PropTypes.func.isRequired,
  loadNewPost: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isShowing: state.mainReducer.isShowing,
  total: state.mainReducer.total,
  loading: state.mainReducer.loading,
  articles: state.mainReducer.articles,
  loadNewPost: state.mainReducer.loadNewPost,
})

export default connect(
  mapStateToProps,
  {
    showSidebar,
    fetchArticles,
    addNewPost,
  },
)(ArticleList)
