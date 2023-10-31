import React from 'react';
import { styled } from 'styled-components';
import ImgBasicProfile from '../../images/basic-profile.svg';
import { Link, useNavigate } from 'react-router-dom';

const StyledProfileMine = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  background-color: #ffffff;
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
  /* 프로필 수정, 상품 등록 부분 */
  & .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  & .btn-fix {
    width: 120px;
    height: 34px;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
  }
  & .btn-add {
    width: 100px;
    height: 34px;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
  }
`;

export default function ProfileMine({ myInfo }) {
  const navigate = useNavigate();

  const handleProfileEditClick = () => {
    navigate('/myprofile/modification');
  };

  const handleProductUploadClick = () => {
    navigate('/myprofile/uploadproduct');
  };

  return (
    <StyledProfileMine>
      {/* 팔로워 프로필 팔로잉 */}
      <div className="profile-wrapper">
        <Link to="/myprofile/follow">
          <p className="followers count">{myInfo && myInfo.followerCount}</p>
          <p className="followers content">followers</p>
        </Link>
        <img
          src={
            myInfo.image === 'http://146.56.183.55:5050/Ellipse.png'
              ? ImgBasicProfile
              : myInfo.image
          }
          alt="프로필로고"
        />
        <span className="span-followings">
          <p className="followings count">{myInfo && myInfo.followingCount}</p>
          <p className="followings content">followings</p>
        </span>
      </div>

      {/* 이름, 계정, 소개 부분 */}
      <h2 className="a11y-hidden">이름, 계정, 소개 부분</h2>
      <div className="profile-data-wrapper">
        <span className="content-name">{myInfo && myInfo.username}</span>
        <span className="content-accountName">
          @{myInfo && myInfo.accountname}
        </span>
        <span className="content-explain">
          엘핏 스포츠 강습권, 전국 거래, 저렴한 강습권
        </span>
      </div>

      {/* 프로필 수정, 상품 등록 부분 */}
      <h2 className="a11y-hidden">채팅, 팔로우, 공유 버튼</h2>
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn-fix"
          onClick={handleProfileEditClick}
        >
          프로필 수정
        </button>
        <button
          type="submit"
          className="btn-add"
          onClick={handleProductUploadClick}
        >
          상품 등록
        </button>
      </div>
    </StyledProfileMine>
  );
}
