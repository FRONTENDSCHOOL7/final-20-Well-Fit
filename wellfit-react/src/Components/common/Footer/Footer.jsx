import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import HomeIcon from '../../../images/icon-home.svg';
import HomeIconFill from '../../../images/icon-home-fill.svg';
import ChatIcon from '../../../images/icon-message-circle-1.svg';
import ChatIconFill from '../../../images/icon-message-circle-fill.svg';
import EditIcon from '../../../images/icon-edit.svg';
import ProfileIcon from '../../../images/icon-user.svg';
import ProfileIconFill from '../../../images/icon-user-fill.svg';
import MoreIcon from '../../../images/icon-more-square.svg';
import MoreIconFill from '../../../images/icon-more-square-fill.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setActiveTab('home');
        break;
      case '/chattinglist':
        setActiveTab('chat');
        break;
      case '/postupload':
        setActiveTab('post');
        break;
      case '/myprofile':
        setActiveTab('profile');
        break;
      case '/pagemore':
        setActiveTab('more');
        break;
      default:
        setActiveTab('');
        break;
    }
  }, [location.pathname]);

  const handleTabClick = (path) => {
    // 페이지 이동만 수행
    navigate(path);
  };

  return (
    <StyledMainFooter>
      <div className="tapbar">
        <button onClick={() => handleTabClick('/home')}>
          <img src={activeTab === 'home' ? HomeIconFill : HomeIcon} alt="홈" />
          <div>홈</div>
        </button>
        <button onClick={() => handleTabClick('/chattinglist')}>
          <img
            src={activeTab === 'chat' ? ChatIconFill : ChatIcon}
            alt="채팅"
          />
          <div>채팅</div>
        </button>
        <button onClick={() => handleTabClick('/postupload')}>
          <img src={EditIcon} alt="게시물 작성" />
          <div>게시물 작성</div>
        </button>
        <button onClick={() => handleTabClick('/myprofile')}>
          <img
            src={activeTab === 'profile' ? ProfileIconFill : ProfileIcon}
            alt="프로필"
          />
          <div>프로필</div>
        </button>
        <button onClick={() => handleTabClick('/pagemore')}>
          <img
            src={activeTab === 'more' ? MoreIconFill : MoreIcon}
            alt="더보기"
          />
          <div>더보기</div>
        </button>
      </div>
    </StyledMainFooter>
  );
}

const StyledMainFooter = styled.footer`
  /* position: absolute;
  bottom: 0; */

  & .tapbar {
    display: flex;
    justify-content: space-around;

    width: 390px;
    height: 60px;
    border-top: 1px solid #dbdbdb;
    /* padding-top: 10px; */
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
