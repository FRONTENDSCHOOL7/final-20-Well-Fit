import React, { useState, useEffect } from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';
import Footer from '../../Components/common/Footer/Footer';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';
import { getMyInfo } from '../../api/PostMyInfo';
import { getMyFollowList } from '../../api/GETMyFollowList';
const StyledHomePage = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;

  /* 게시물 많아지면 스크롤 생성 */
  overflow: hidden;
`;

export default function PageHome() {
  // 내가 팔로우한 상대 게시물 상태
  const [followedUserFeedList, setFollowedUserFeedList] = useState([]);

  // followList 상태
  const [hasFollowList, setHasFollowList] = useState(false);
  useEffect(() => {
    const getUserProfileData = async () => {
      try {
        const myInfo = await getMyInfo();
        const myFollowList = await getMyFollowList();
        console.log(myInfo.user);
        console.log(myFollowList);

        if (myFollowList.length !== 0) {
          setHasFollowList(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfileData();
  }, []);

  return (
    <>
      <StyledHomePage>
        <HomeHeader />
        {hasFollowList ? <HomeContent /> : <HomeNonFeed />}
      </StyledHomePage>
      <Footer />
    </>
  );
}
