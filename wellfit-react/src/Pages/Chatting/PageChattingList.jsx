import React from 'react';
import { styled } from 'styled-components';
import ChattingUserListContent from '../../Components/Chatting/ChattingUserListContent';
import ChattingUserListHeader from '../../Components/Chatting/ChattingUserListHeader';
import Footer from '../../Components/common/Footer/Footer';

const StyledChattingListPage = styled.div`
  width: 390px;
  height: 732px;
  margin: 0 auto;
  font-size: 14px;
  background-color: #fff;

  /* 화면 넘치면 숨김 */
  overflow: hidden;
`;

export default function PageChattingList() {
  return (
    <>
      <ChattingUserListHeader />
      <StyledChattingListPage>
        <ChattingUserListContent />
      </StyledChattingListPage>
      <Footer />
    </>
  );
}
