import React from 'react';
import { styled } from 'styled-components';

const StyledMainFooter = styled.footer`
  & .tapbar {
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 390px;
    height: 60px;
    border-top: 1px solid #dbdbdb;
    padding-top: 10px;
    background-color: #fefefe;
  }
  & .tapbar button {
    padding: 12px;
    font-size: 10px;
    color: #767676;
  }
  & .tapbar img {
    width: 24px;
    height: 24px;
  }

  & .tapbar div {
    margin-top: 4px;
  }
`;

export default function Footer() {
  return (
    <StyledMainFooter>
      <div className="tapbar">
        <button>
          <img src="./images/icon-home.svg" alt="홈" />
          <div>홈</div>
        </button>
        <button>
          <img src="./images/icon-message-circle-1.svg" alt="채팅" />
          <div>채팅</div>
        </button>
        <button>
          <img src="./images/icon-edit.svg" alt="게시물 작성" />
          <div>게시물 작성</div>
        </button>
        <button>
          <img src="./images/icon-user.svg" alt="프로필" />
          <div>프로필</div>
        </button>
        <button>
          <img src="./images/icon-more-square.svg" alt="더보기" />
          <div>더보기</div>
        </button>
      </div>
    </StyledMainFooter>
  );
}
