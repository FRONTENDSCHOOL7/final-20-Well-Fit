import React from 'react';
import { styled } from 'styled-components';
import FollowList from './FollowList';

const StyledFollowContent = styled.main`
  padding: 24px 16px;

  /* 화면 넘치면 스크롤 */
  overflow: scroll;
  height: 100%;
`;

export default function FollowContent() {
  return (
    <StyledFollowContent>
      <FollowList />
    </StyledFollowContent>
  );
}
