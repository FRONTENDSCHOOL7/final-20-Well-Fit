import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import profileImage from '../../images/basic-profile-small.svg';

const StyledFollowItem = styled.li`
  & + li {
    margin-top: 16px;
  }
  & .search-result {
    display: flex;
    /* 여기서 이미지가 살짝 뜨는 문제 물어보기 */
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  & .search-result .user-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
    vertical-align: middle;
  }
  & .user-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    vertical-align: baseline;
  }
  & .user-info .user-comment {
    font-size: 12px;
    color: #767676;
  }
  & .search-result button {
    font-size: 12px;
    width: 56px;
    height: 28px;
    line-height: 28px;
    border-radius: 26px;
  }
  /* 팔로우 안 되어있으면 파란색 */
  & .btn-follower.active {
    color: #fff;
    background-color: #515fec;
  }
  /* 팔로우 되어있으면 회색 */
  & .btn-follower.inactive {
    color: #767676;
    border: 1px solid #dbdbdb;
  }
`;

export default function FollowItem() {
  const [isActive, setIsActive] = useState(true);
  const onClickActiveHnadler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <StyledFollowItem>
      <article className="search-result">
        <h3 className="a11y-hidden">팔로우 유저</h3>
        <div className="user-wrap">
          <div className="img-profile">
            <img src={profileImage} alt="프로필 이미지" />
          </div>
          <div className="user-info">
            <p className="user-name">애월읍 한라봉 최고 맛집</p>
            <p className="user-comment">정성을 다해 농사짓는 한라봉</p>
          </div>
        </div>
        <div>
          <button
            className={[
              'btn-follower',
              `${isActive ? 'active' : 'inactive'}`,
            ].join(' ')}
            onClick={onClickActiveHnadler}
          >
            {isActive ? '팔로우' : '취소'}
          </button>
        </div>
      </article>
    </StyledFollowItem>
  );
}
