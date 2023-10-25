import React from 'react';
import { styled } from 'styled-components';
import profileImage from '../../images/basic-profile-small.svg';

const StyledChattingUserItem = styled.li`
  & + li {
    margin-top: 20px;
  }
  & .search-result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    cursor: pointer;
  }
  & .search-result .user-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & .img-profile {
    position: relative;
  }
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
    vertical-align: middle;
  }
  & .img-profile .notification-icon {
    width: 12px;
    height: 12px;
    background-color: #f00;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
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

  & .chat-date {
    align-self: flex-end;
    font-size: 10px;
    color: red;
  }
`;

export default function ChattingUserItem() {
  return (
    <StyledChattingUserItem>
      <article className="search-result">
        <h3 className="a11y-hidden">대화상대 유저</h3>
        <div className="user-wrap">
          <div className="img-profile">
            <span className="notification-icon"></span>
            <img src={profileImage} alt="프로필 사진" />
          </div>
          <div className="user-info">
            <p className="user-name">애월읍 한라봉 최고 맛집</p>
            <p className="user-comment">이번에 정정 언제하맨마씸?</p>
          </div>
        </div>
        <div className="chat-date">
          <time dateTime="2020-10-21">2020.10.25</time>
        </div>
      </article>
    </StyledChattingUserItem>
  );
}
