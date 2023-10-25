import React from 'react';
import { styled } from 'styled-components';
import PostCommentItem from './PostCommentItem';

const StyledPostCommentList = styled.section`
  padding: 20px 16px;
  height: 235px;
  overflow: scroll;
`;

export default function PostCommentList() {
  return (
    <StyledPostCommentList>
      <ol>
        <PostCommentItem />
        <PostCommentItem />
        <PostCommentItem />
        <PostCommentItem />
        <PostCommentItem />
      </ol>
    </StyledPostCommentList>
  );
}
