import React from 'react';
import { styled } from 'styled-components';
import HomeFeedList from './HomeFeedList';

const StyledHomePageContent = styled.main`
  padding: 20px 16px;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: scroll;
  height: 100%;
`;

export default function HomeContent() {
  return (
    <StyledHomePageContent>
      <HomeFeedList />
    </StyledHomePageContent>
  );
}
