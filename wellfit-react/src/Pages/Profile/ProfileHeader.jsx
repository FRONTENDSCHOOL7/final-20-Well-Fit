import React from 'react';
import styled from 'styled-components';

const StyledProfileHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;

  & .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    padding: 13px 12px 13px 16px;
    background-color: #fefefe;
  }
  & .search-bar .btn-goback {
    width: 22px;
    height: 22px;
    background-image: url('../../../../images/icon-arrow-left.svg');
    vertical-align: middle;
  }
  & .search-bar .btn-save {
    color: #fff;
    width: 90px;
    height: 32px;
    padding: 7px 0;
    border-radius: 44px;
    font-size: 14px;
    background-color: #97b2de;
  }
`;
export default function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <div className="search-bar">
        <button type="button" className="btn-goback">
          <span className="a11y-hidden">뒤로가기</span>
        </button>
        <button type="button" className="btn-save">
          저장
        </button>
      </div>
    </StyledProfileHeader>
  );
}
