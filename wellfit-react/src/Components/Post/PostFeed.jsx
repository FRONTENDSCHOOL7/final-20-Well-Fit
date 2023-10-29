import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import feedImage from './images/unsplash_FWtiv70Z_ZY.png';
import heartFill from '../../images/icon-heart-fill.svg';
import profileImage from '../../images/basic-profile-small.svg';
import heartEmpty from '../../images/icon-heart.svg';
import commentCircle from '../../images/icon-message-circle.svg';
import moreIcon from '../../images/s-icon-more-vertical.svg';

const StyledPostFeed = styled.article`
  display: flex;
  gap: 12px;
  padding: 20px 16px 24px 16px;
  & .post-detail-mine-content .feed .img-feed {
    width: 304px;
    height: 228px;
  }
  & .post-detail-mine-content ol li + li {
    margin-top: 24px;
  }

  /* img-profile 시작 */
  & .post-detail-mine-content .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }

  /* img-profile 끝 */

  /* feed 시작 */
  & .feed {
    font-size: 14px;
  }
  & .feed .feed-header {
    margin-bottom: 16px;

    /* 프로필이미지 옆에있는 텍스트를 내리기 위해 적용 */
    margin-top: 8px;
    position: relative;
  }
  & .feed .feed-header .btn-post-toggle {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  & .feed .feed-header .feed-writer {
    color: #767676;
  }
  & .feed .feed-content img {
    margin-top: 16px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  /* 좋아요 버튼, 메세지 버튼 스타일 시작 */
  & .feed .feed-info button {
    width: 20px;
    height: 20px;
  }
  & .feed .feed-info .icons {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 12px 0 16px;
  }
  & .feed .feed-info .icons .hearts,
  .feed .feed-info .icons .comments {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  & .feed .feed-info time {
    font-size: 10px;
    color: #767676;
  }
  & .feed-info .comments .btn-comments {
    cursor: auto;
  }
  /* 좋아요 버튼, 메세지 버튼 스타일 끝 */

  /* feed 끝 */

  /* post-detail-mine-content 끝 */
`;

export default function PostFeed() {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const onClickHeartHandler = () => {
    setIsHeartClick((prevState) => !prevState);
  };

  useEffect(() => {
    setHeartCount((prevState) =>
      isHeartClick ? prevState + 1 : prevState - 1
    );
  }, [isHeartClick]);

  useEffect(() => {
    setHeartCount(0);
  }, []);
  return (
    <StyledPostFeed>
      <h2 className="a11y-hidden">게시물 자세히보기</h2>
      <div className="img-profile">
        <img src={profileImage} alt="프로필 사진" />
      </div>
      <section className="feed">
        <div className="feed-header">
          <p className="feed-title">애월읍 위니브 감귤농장</p>
          <p className="feed-writer">&#64;weniv_Mandarin</p>
          <button type="button" className="btn-post-toggle">
            <img src={moreIcon} alt="토글" />
            <span className="a11y-hidden">토글</span>
          </button>
        </div>
        <div className="feed-content">
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <img className="img-feed" src={feedImage} alt="피드 사진" />
        </div>
        <div className="feed-info">
          <div className="icons">
            <div className="hearts">
              <button className="btn-hearts" onClick={onClickHeartHandler}>
                {isHeartClick ? (
                  <img src={heartFill} alt="좋아요" />
                ) : (
                  <img src={heartEmpty} alt="좋아요" />
                )}
                <span className="a11y-hidden">좋아요 버튼</span>
              </button>
              <span>{heartCount}</span>
            </div>
            <div className="comments">
              <button className="btn-comments">
                <img src={commentCircle} alt="댓글" />
                <span className="a11y-hidden">댓글목록 보기</span>
              </button>
              <span>12</span>
            </div>
          </div>
          <time dateTime="2020-10-21">2020년 10월 21일</time>
        </div>
      </section>
    </StyledPostFeed>
  );
}
