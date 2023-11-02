import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgHeart from '../../images/icon-heart.svg';
import ImgMessage from '../../images/icon-message-circle.svg';
import ImgBasicProfileSmall from '../../images/basic-profile-small.svg';
import ImgMore from '../../images/s-icon-more-vertical.svg';
import ModalListPost from '../common/Modal/ModalListPost';
import { getMyFeedList } from '../../api/GETMineFeedList';
import { useNavigate } from 'react-router-dom';

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
  const [myFeed, setMyFeed] = useState([]);
  const navigate = useNavigate();

  const handleChattingClick = () => {
    navigate('/home/post/mine');
  };

  const handleModalClick = () => {
    setIsModal(!isModal);
  };

  const myFeedData = async () => {
    try {
      const myData = await getMyFeedList();
      setMyFeed(myData.post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myFeedData();
  }, []);

  return (
    <>
      <StyledListFeed>
        {myFeed.map((post, index) => {
          return (
            <div key={index}>
              <span className="total-wrapper">
                <article className="profile-writter">
                  <img src={ImgBasicProfileSmall} alt="프로필" />
                  <span className="profile-info-wrapper">
                    <p className="profile-info-name">
                      {post.author ? post.author.username : ''}
                    </p>
                    <p className="profile-info-account">
                      {post.author ? post.author.accountname : ''}
                    </p>
                  </span>
                </article>
                <button type="button" onClick={handleModalClick}>
                  <img src={ImgMore} />
                </button>
              </span>

              <h2 className="a11y-hidden">글쓰기 피드 부분</h2>
              <article className="writting-wrapper">
                <span className="writting-contents">
                  {post.content ? post.content : ''}
                </span>
                {post.image && (
                  <img src={post.image ? post.image : ''} alt="피드 사진" />
                )}

                <div className="writting-btn-wrapper">
                  <span>
                    <button type="submit" className="writting-btn-like">
                      <img src={ImgHeart} alt="좋아요 버튼" />
                    </button>
                    <span className="writting-btn-like-count">
                      {post.heartCount ? post.heartCount : ''}
                    </span>
                  </span>
                  <span>
                    <button
                      type="submit"
                      className="writting-btn-chatting"
                      onClick={handleChattingClick}
                    >
                      <img src={ImgMessage} alt="댓글 버튼" />
                    </button>
                    <span className="writting-btn-chatting-count">
                      {post.commentCount ? post.commentCount : ''}
                    </span>
                  </span>
                </div>
                <p className="date-content">
                  {post.updatedAt
                    ? (() => {
                        const date = new Date(post.updatedAt);
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1; // JavaScript의 월은 0부터 시작합니다.
                        const day = date.getDate();
                        return `${year}년 ${month}월 ${day}일`;
                      })()
                    : ''}
                </p>
              </article>
            </div>
          );
        })}
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
