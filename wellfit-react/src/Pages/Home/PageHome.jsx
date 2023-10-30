import React, { useState } from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';
import Footer from '../../Components/common/Footer/Footer';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';
const StyledHomePage = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: hidden;
`;

export default function PageHome() {
  const [FeedList, setFeedList] = useState([]);
  const [hasFeed, setHasFeed] = useState(false);
  const hasFeedHandler = () => {
    setHasFeed((prevState) => !prevState);
  };
  return (
    <>
      <StyledHomePage>
        <HomeHeader />
        {hasFeed ? (
          <HomeContent hasFeedHandler={hasFeedHandler} />
        ) : (
          <HomeNonFeed />
        )}
      </StyledHomePage>
      <Footer />
    </>
  );
}
