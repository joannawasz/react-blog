import styled from 'styled-components'
import theme from '../../../theme/theme'

const Comment = styled.div`
  position: relative;

  margin-bottom: 40px;
  padding: 40px;

  &:not(:last-child)::after {
    display: block;
    content: '';

    position: absolute;
    bottom: 0;
    left: calc(50% - (${theme.size.commentDecor} / 2));

    height: 1px;
    width: ${theme.size.commentDecor};

    background-color: ${theme.color.cyan};
    opacity: 0.5;
  }
`

const CommentAuthor = styled.p`
  span {
    margin-right: calc(${theme.size.gutter} * 0.3);
    font-size: 12px;
  }
`

const CommentBody = styled.p`
  margin-top: calc(${theme.size.gutter});
  font-size: ${theme.size.gutter};
`

export { Comment, CommentAuthor, CommentBody }
