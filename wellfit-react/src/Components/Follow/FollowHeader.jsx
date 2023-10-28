import React from 'react';
import { styled } from 'styled-components';
import gobackIcon from '../../images/icon-arrow-left.svg';

const StyledFollowHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;
  & .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
  }
  & .search-bar .btn-goback {
    width: 22px;
    height: 22px;
    background-image: url('../../../images/icon-arrow-left.svg');
  }
  & .search-bar strong {
    flex: 1;
    padding: 7px 0 7px 0px;
  }
`;

export default function FollowHeader() {
  return (
    <StyledFollowHeader>
      <h2 className="a11y-hidden">뒤로가기 버튼과 팔로워</h2>
      <div className="search-bar">
        <button type="button" className="btn-goback">
          <img src={gobackIcon} alt="뒤로가기버튼" />
        </button>
        <strong>Followers</strong>
      </div>
    </StyledFollowHeader>
  );
}
