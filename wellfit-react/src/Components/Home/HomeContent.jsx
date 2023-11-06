import React from 'react';
import { styled } from 'styled-components';
import HomeFeedList from './HomeFeedList';

const StyledHomePageContent = styled.main`
  /* padding: 20px 16px 30px; */

  /* 게시물 많아지면 스크롤 생성 */
  overflow: scroll;
  height: 100%;

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    /* display: none; */ /* 스크롤 바 숨기기 */
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey; /* 스크롤 바 색상 */
    border-radius: 10px; /* 스크롤 바 모서리 둥글게 */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤 바 배경 색상 */
  }
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: darkgrey transparent; /* 스크롤 바 색상, 스크롤 바 배경 색상 */
`;

export default function HomeContent({ followedUserFeedList }) {
  return (
    <StyledHomePageContent>
      <HomeFeedList followedUserFeedList={followedUserFeedList} />
    </StyledHomePageContent>
  );
}
