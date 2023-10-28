import React, { useState } from 'react';
import styled from 'styled-components';
import item4 from './images/item_4.png';
import ImgHeart from '../../images/icon-heart.svg';
import ImgMessage from '../../images/icon-message-circle.svg';
import ImgBasicProfileSmall from '../../images/basic-profile-small.svg';
import ImgMore from '../../images/s-icon-more-vertical.svg';
import ModalListPost from '../common/Modal/ModalListPost';

const StyledListFeed = styled.section`
  background-color: #fff;
  height: 400px;
  overflow-y: scroll;

  & .total-wrapper {
    display: flex;
    justify-content: space-between;
  }
  & .total-wrapper > button {
    padding-right: 5px;
  }
  /* 글쓴이 프로필 정보란 */
  & .profile-writter {
    display: flex;
    gap: 12px;
    padding-left: 20px;
    padding-top: 16px;
  }
  & .profile-writter > img {
    width: 42px;
    height: 42px;
  }

  & .profile-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .profile-info-name {
    color: #000;
    font-size: 16px;
    font-weight: 500;
  }
  & .profile-info-account {
    color: #767676;
    font-size: 12px;
    font-weight: 400;
    padding-top: 4px;
  }

  /* 글쓰기 피드 본문 부분 */
  & .writting-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 70px;
    padding-right: 16px;
    padding: 16px 16px 30px 70px;
  }
  & .writting-contents {
    color: #000;
    font-family: 'SUIT-Regular';
    font-size: 12px;
    font-weight: 400;
  }

  & .writting-btn-wrapper {
    display: flex;
  }
  & .writting-btn-like {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 6px;
  }
  & .writting-btn-chatting {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 6px;
    margin-left: 16px;
  }
  & .writting-btn-like-count,
  .writting-btn-chatting-count {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
    vertical-align: middle;
  }

  & .date-content {
    color: #767676;
    font-size: 10px;
    font-weight: 400;
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function ListFeed() {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <StyledListFeed>
        <span className="total-wrapper">
          <article className="profile-writter">
            <img src={ImgBasicProfileSmall} alt="프로필" />
            <span className="profile-info-wrapper">
              <p className="profile-info-name">웰핏 헬스 공장</p>
              <p className="profile-info-account">@wellfit_MINJAE</p>
            </span>
          </article>
          <button type="button" onClick={handleModalClick}>
            <img src={ImgMore} />
          </button>
        </span>

        <h2 className="a11y-hidden">글쓰기 피드 부분</h2>
        <article className="writting-wrapper">
          <span className="writting-contents">
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </span>
          <img src={item4} alt="피드 사진" />

          <div className="writting-btn-wrapper">
            <span>
              <button type="submit" className="writting-btn-like">
                <img src={ImgHeart} alt="좋아요 버튼" />
              </button>
              <span className="writting-btn-like-count">58</span>
            </span>
            <span>
              <button type="submit" className="writting-btn-chatting">
                <img src={ImgMessage} alt="댓글 버튼" />
              </button>
              <span className="writting-btn-chatting-count">12</span>
            </span>
          </div>
          <p className="date-content">2020년 10월 21일</p>
        </article>
      </StyledListFeed>
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalListPost />
          {/* 이 부분은 우선 모달로 넣어놨는데 성우님 신고하기 모달로 대체해야함 */}
        </>
      )}
    </>
  );
}
