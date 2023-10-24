import React from 'react';
import { styled } from 'styled-components';

const StyledChattingUserListHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;

  & .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    padding: 13px 12px 13px 16px;
  }
  & .search-bar .btn-goback {
    width: 22px;
    height: 22px;
    background-image: url('../../../images/icon-arrow-left.svg');
    vertical-align: middle;
  }
  & .search-bar .btn-toggle {
    width: 24px;
    height: 24px;
    background-image: url('../../../images/icon-\ more-vertical.svg');
    vertical-align: middle;
  }
`;

export default function ChattingUserListHeader() {
  return (
    <StyledChattingUserListHeader>
      <div className="search-bar">
        <button type="button" className="btn-goback">
          <span className="a11y-hidden">뒤로가기</span>
        </button>
        <button type="button" class="btn-toggle">
          <span className="a11y-hidden">토글</span>
        </button>
      </div>
    </StyledChattingUserListHeader>
  );
}
