import React, { useState, useEffect } from 'react';
import HomeHeader from '../../Components/Home/HomeHeader';
import { styled } from 'styled-components';
import HomeContent from '../../Components/Home/HomeContent';
import Footer from '../../Components/common/Footer/Footer';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';
import { getMyInfo } from '../../api/PostMyInfo';
import { getMyFollowList } from '../../api/GETMyFollowList';
import { getFollowedUserFeedList } from '../../api/GETFollowedFeedList';
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
  const [followedUserFeedList, setFollowedUserFeedList] = useState(null);

  // followList 상태
  const [hasFollowList, setHasFollowList] = useState(false);

  // follow list 가 있는지 확인
  useEffect(() => {
    const getUserProfileData = async () => {
      try {
        const myInfo = await getMyInfo();
        const myFollowList = await getMyFollowList();
        console.log(myInfo.user);
        console.log(myFollowList);

        if (myFollowList.length !== 0) {
          setHasFollowList(true);
        } else {
          // setHasFollowList(false);
          setHasFollowList(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfileData();
  }, []);

  // 팔로우한 유저가 있다면 유저 들의 게시물 전부 불러오기
  useEffect(() => {
    const followedUserFeedList = async () => {
      if (hasFollowList) {
        try {
          const feedList = await getFollowedUserFeedList();
          setFollowedUserFeedList(feedList.posts);

          console.log(feedList.posts);
        } catch (error) {
          console.error(error);
        }
      }
    };
    followedUserFeedList();
  }, [hasFollowList]);

  useEffect(() => {
    console.log(followedUserFeedList);
    if (!followedUserFeedList || followedUserFeedList.length === 0) {
      setHasFollowList(false);
    }
  }, [followedUserFeedList]);

  if (!followedUserFeedList) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <StyledHomePage>
        <HomeHeader />
        {hasFollowList ? (
          <HomeContent followedUserFeedList={followedUserFeedList} />
        ) : (
          <HomeNonFeed />
        )}
      </StyledHomePage>
      <Footer />
    </>
  );
}
