import React from 'react';
import PostCommentList from './PostCommentList';
import PostFeed from './PostFeed';
import PostFooter from './PostFooter';
import { styled } from 'styled-components';

const StyledHr = styled.hr`
  border: 1px solid #dbdbdb;
  margin: 0;
`;

export default function PostContent() {
  return (
    <main>
      <PostFeed />
      <StyledHr />
      <PostCommentList />
      <PostFooter />
    </main>
  );
}
