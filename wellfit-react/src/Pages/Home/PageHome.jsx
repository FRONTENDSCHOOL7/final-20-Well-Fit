import React, { useState } from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';
import Footer from '../../Components/common/Footer/Footer';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';
import axios from 'axios';
import { useEffect } from 'react';
const StyledHomePage = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  background-color: #fff;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: hidden;
`;

export default function PageHome() {
  useEffect(() => {
    const getUserProfileData = async () => {
      const baseUrl = 'https://api.mandarin.weniv.co.kr';

      try {
        const token = localStorage.getItem('token');
        console.log(token);

        const url = `${baseUrl}/user/myinfo`;
        const option = {
          url,
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios(option);
        console.log(res);

        if (res.data.status === 404) {
          throw new Error('404 에러');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfileData();
  }, []);

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
