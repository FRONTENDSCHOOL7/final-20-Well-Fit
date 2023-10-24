import React from 'react';
import { styled } from 'styled-components';

const StyledChattingUserItem = styled.li`
  & + li {
    margin-top: 20px;
  }
  & .search-result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
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
      <article class="search-result">
        <h3 class="a11y-hidden">대화상대 유저</h3>
        <div class="user-wrap">
          <div class="img-profile">
            <span class="notification-icon"></span>
            <img
              src="../../../images/basic-profile-small.svg"
              alt="프로필 사진"
            />
          </div>
          <div class="user-info">
            <p class="user-name">애월읍 한라봉 최고 맛집</p>
            <p class="user-comment">이번에 정정 언제하맨마씸?</p>
          </div>
        </div>
        <div class="chat-date">
          <time datetime="2020-10-21">2020.10.25</time>
        </div>
      </article>
    </StyledChattingUserItem>
  );
}
