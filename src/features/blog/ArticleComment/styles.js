import styled from 'styled-components';

const Comment = styled.div`
  margin-bottom: 40px;
  padding: 40px;
  background-color: #e8e8e8;
`;

const CommentAuthor = styled.p`
  span {
    margin-right: 6px;
    font-size: 12px;
  }
`;

const CommentBody = styled.p`
  margin-top: 40px;
  font-size: 20px;
`;

export { Comment, CommentAuthor, CommentBody };
