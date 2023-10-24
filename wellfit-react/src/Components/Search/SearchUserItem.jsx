import React from 'react';
import { styled } from 'styled-components';

const StyledSearchUserItem = styled.li`
  & + li {
    margin-top: 16px;
  }
  & .search-result {
    display: flex;
    /* 여기서 이미지가 살짝 뜨는 문제 물어보기 */
    align-items: center;
    gap: 12px;
  }
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }
  & .user-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    vertical-align: baseline;
  }
  & .user-info .user-email {
    font-size: 12px;
    color: #767676;
  }
`;

export default function SearchUserItem() {
  return (
    <StyledSearchUserItem>
      <article class="search-result">
        <h3 class="a11y-hidden">검색된 유저</h3>
        <div class="img-profile">
          <img
            src="../../../images/basic-profile-small.svg"
            alt="프로필 사진"
          />
        </div>
        <div class="user-info">
          <p class="user-name">애월읍 위니브 감귤농장</p>
          <p class="user-email">&#64; weniv_Mandarin</p>
        </div>
      </article>
    </StyledSearchUserItem>
  );
}
