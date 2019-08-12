import React, { useState, useMemo, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { ToastContainer, toast } from 'react-toastify';
import ArticleFull from '../ArticleFull';
import ArticleComment from '../ArticleComment';
import CommentForm from '../CommentForm';
import { Button1 } from '../../../constants/styles';
import { API_URL } from '../../../config';
import { ArticlePageWrapper, ArticleButtonWrapper, ArticleCommentsWrapper } from './styles';

const ArticlePage = ({
  match: {
    params: { id },
  },
}) => {
  const getComments = useMemo(() => {
    return axios.get(`${API_URL}comments?postId=${id}`);
  }, [id]);

  const getPost = useMemo(() => {
    return axios.get(`${API_URL}posts/${id}`);
  }, [id]);

  const [isShowing, setIsShowing] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [post, setPost] = useState([]);

  const errorMessage = () =>
    toast('Problem occurred, sorry!', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const getArticleData = useCallback(async () => {
    try {
      const postData = (await getPost).data;
      setPost(postData);
    } catch (error) {
      errorMessage();
    }
  }, [getPost]);

  const loadComments = useCallback(async () => {
    try {
      const comments = (await getComments).data;
      setCommentList(comments);
    } catch (error) {
      errorMessage();
    }
  }, [getComments]);

  useEffect(() => {
    getArticleData();
  }, [getArticleData]);

  useEffect(() => {
    if (!commentList.length) {
      loadComments();
    }
    // eslint-disable-next-line
  }, [isShowing]);

  const toggleComments = () => {
    setIsShowing(value => !value);
  };

  const onAddComment = comment => {
    setCommentList(data => [
      {
        ...comment,
        post_id: data.postId,
        id: data.length + 1,
      },
      ...data,
    ]);
  };

  return (
    <ArticlePageWrapper className="article-page-wrapper">
      <ToastContainer />
      <ArticleFull {...post} />
      <CommentForm onSubmit={onAddComment} />
      <ArticleButtonWrapper>
        <Button1 onClick={toggleComments}>{isShowing ? 'hide comments' : 'show comments'}</Button1>
      </ArticleButtonWrapper>
      {isShowing && (
        <ArticleCommentsWrapper>
          {commentList.map(data => (
            <ArticleComment {...data} key={data.id} />
          ))}
        </ArticleCommentsWrapper>
      )}
    </ArticlePageWrapper>
  );
};

ArticlePage.propTypes = {
  id: PropTypes.number,
};

ArticlePage.defaultProps = {
  id: 23456,
};

export default ArticlePage;
