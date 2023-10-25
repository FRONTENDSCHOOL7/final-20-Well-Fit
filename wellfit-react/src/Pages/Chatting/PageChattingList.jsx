import React from 'react';
import { styled } from 'styled-components';
import ChattingUserListContent from '../../Components/Chatting/ChattingUserListContent';
import ChattingUserListHeader from '../../Components/Chatting/ChattingUserListHeader';

const StyledChattingListPage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;

  /* 화면 넘치면 숨김 */
  overflow: hidden;
`;

export default function PageChattingList() {
  return (
    <StyledChattingListPage>
      <ChattingUserListHeader />
      <ChattingUserListContent />
    </StyledChattingListPage>
  );
}
