import React from 'react';
import { styled } from 'styled-components';
import ChattingUserList from './ChattingUserList';

const StyledChattingUserListContent = styled.main`
  padding: 24px 16px;

  /* 화면 넘치면 스크롤 */
  overflow: scroll;
  height: 100%;
`;

export default function ChattingUserListContent() {
  return (
    <StyledChattingUserListContent>
      <ChattingUserList />
    </StyledChattingUserListContent>
  );
}
