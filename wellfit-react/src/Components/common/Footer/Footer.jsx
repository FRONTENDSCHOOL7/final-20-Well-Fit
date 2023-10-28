import React from 'react';
import { styled } from 'styled-components';
import HomeIcon from '../../../images/icon-home.svg';
import ChatIcon from '../../../images/icon-message-circle-1.svg';
import editIcon from '../../../images/icon-edit.svg';
import profileIcon from '../../../images/icon-user.svg';
import moreIcon from '../../../images/icon-more-square.svg';

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
          <img src={HomeIcon} alt="홈" />
          <div>홈</div>
        </button>
        <button>
          <img src={ChatIcon} alt="채팅" />
          <div>채팅</div>
        </button>
        <button>
          <img src={editIcon} alt="게시물 작성" />
          <div>게시물 작성</div>
        </button>
        <button>
          <img src={profileIcon} alt="프로필" />
          <div>프로필</div>
        </button>
        <button>
          <img src={moreIcon} alt="더보기" />
          <div>더보기</div>
        </button>
      </div>
    </StyledMainFooter>
  );
}
