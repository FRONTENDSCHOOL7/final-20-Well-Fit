import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import ChattingUserList from './ChattingUserList';
import { getMyFollowList } from '../../api/GETMyFollowList';

const StyledChattingUserListContent = styled.main`
  padding: 24px 16px;

  /* 화면 넘치면 스크롤 */
  overflow: scroll;
  height: 100%;
`;

export default function ChattingUserListContent() {
  const [myFollowList, setMyFollowList] = useState(null);

  useEffect(() => {
    const getFollowList = async () => {
      const followList = await getMyFollowList();
      setMyFollowList(followList);
    };
    getFollowList();
  }, []);

  useEffect(() => {
    console.log('나의 팔로우 리스트');
    console.log(myFollowList);
  }, [myFollowList]);

  return (
    <StyledChattingUserListContent>
      <ChattingUserList myFollowList={myFollowList} />
    </StyledChattingUserListContent>
  );
}
