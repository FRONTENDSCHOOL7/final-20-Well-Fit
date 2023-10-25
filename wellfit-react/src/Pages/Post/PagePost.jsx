import React from 'react';
import { styled } from 'styled-components';
import PostContent from '../../Components/Post/PostContent';
import PostHeader from '../../Components/Post/PostHeader';

const StyledPostPage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  background-color: #fff;

  /* 화면 넘치면 숨김 */
  overflow: hidden;

  position: relative;
`;

export default function PagePost() {
  return (
    <StyledPostPage>
      <PostHeader />
      <PostContent />
    </StyledPostPage>
  );
}
