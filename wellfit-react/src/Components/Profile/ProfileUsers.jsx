import React, { useState } from 'react';
import styled from 'styled-components';
import ImgBasicProfile from '../../images/basic-profile.svg';
import ImgMessage from '../../images/icon-message-circle-1.svg';
import ImgShare from '../../images/icon-share.svg';
import { useNavigate } from 'react-router-dom';

const StyledProfileUsers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  padding: 30px 0;
  gap: 16px;

  & .profile-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  & .followers,
  .followings {
    text-align: center;
    padding-bottom: 6px;
  }
  & .followers.count {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }
  & .content {
    color: #767676;
    font-size: 10px;
    font-weight: 400;
  }
  & .followings.count {
    font-size: 18px;
    font-weight: 700;
    color: #767676;
  }

  /* 이름, 계정, 소개 부분 */
  & .profile-data-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .content-name {
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 6px;
  }
  & .content-accountName {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 16px;
  }
  & .content-explain {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 16px;
  }

  /* 채팅, 팔로우, 공유 버튼 */
  & .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  & .btn-chatting,
  .btn-share {
    width: 34px;
    height: 34px;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
  }
  & .btn-follow {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background: #004aad;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  & .btn-follow:active {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background: #004aad;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
  }

  & .btn-unfollow {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background: #fff;
    border: 1px solid #dbdbdb;
  }
`;

export default function ProfileUsers({ userInfo }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const navigate = useNavigate();

  const handleChattingClick = (accountname) => {
    navigate(`/chattinglist/${accountname}/ongoing`);
  };

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert('URL이 클립보드에 복사되었습니다.');
      })
      .catch((err) => {
        alert('URL 복사에 실패했습니다: ', err);
      });
  };

  return (
    <StyledProfileUsers>
      {/* 팔로워 프로필 팔로잉 */}
      <div className="profile-wrapper">
        <span className="span-followers">
          <p className="followers count">
            {userInfo ? userInfo.followerCount : ''}
          </p>
          <p className="followers content">followers</p>
        </span>
        <img
          src={
            userInfo.image === 'http://146.56.183.55:5050/Ellipse.png'
              ? ImgBasicProfile
              : userInfo.image
          }
          alt="프로필로고"
        />
        <span className="span-followings">
          <p className="followings count">
            {userInfo ? userInfo.followingCount : ''}
          </p>
          <p className="followings content">followings</p>
        </span>
      </div>

      {/* 이름, 계정, 소개 부분 */}
      <h2 className="a11y-hidden">이름, 계정, 소개 부분</h2>
      <div className="profile-data-wrapper">
        <span className="content-name">
          {userInfo ? userInfo.username : ''}
        </span>
        <span className="content-accountName">
          @{userInfo ? userInfo.accountname : ''}
        </span>
        <span className="content-explain">
          {userInfo ? userInfo.intro : ''}
        </span>
      </div>

      {/* 채팅, 팔로우, 공유 버튼 */}
      <h2 className="a11y-hidden">채팅, 팔로우, 공유 버튼</h2>
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn-chatting"
          onClick={handleChattingClick}
        >
          <img src={ImgMessage} alt="채팅 하기" />
        </button>
        <button
          type="submit"
          className={isFollowing ? 'btn-follow' : 'btn-unfollow'}
          onClick={(e) => {
            setIsFollowing(!isFollowing);
          }}
        >
          {isFollowing ? '팔로우' : '언팔로우'}
        </button>
        <button type="button" className="btn-share" onClick={handleShare}>
          <img src={ImgShare} alt="공유 하기" />
        </button>
      </div>
    </StyledProfileUsers>
  );
}
