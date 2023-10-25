import React from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';

const StyledHomePage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  background-color: #fff;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: hidden;
`;

export default function PageHome() {
  return (
    <StyledHomePage>
      <HomeHeader />
      <HomeContent />
    </StyledHomePage>
  );
}
