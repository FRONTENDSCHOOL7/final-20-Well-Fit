import React from 'react';
import { styled } from 'styled-components';
import feedImage from './images/unsplash_FWtiv70Z_ZY.png';

const StyledHomeFeed = styled.li`
  display: flex;
  gap: 12px;

  & + li {
    margin-top: 24px;
  }
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }

  & .feed {
    font-size: 14px;
  }
  & .feed .feed-header {
    margin-bottom: 16px;

    /* 프로필이미지 옆에있는 텍스트를 내리기 위해 적용 */
    margin-top: 8px;
  }

  & .feed .feed-header .feed-writer {
    font-size: 12px;
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
  & .feed .feed-info .hearts .btn-hearts {
    background-image: url('../../../images/icon-heart.svg');
  }
  & .feed .feed-info .comments .btn-comments {
    background-image: url('../../../images/icon-message-circle.svg');
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
  /* 좋아요 버튼, 메세지 버튼 스타일 끝 */
`;

export default function HomeFeed() {
  return (
    <StyledHomeFeed>
      <h3 class="a11y-hidden">펄로우한 계정 게시물</h3>
      <div class="img-profile">
        <img src="../../../images/basic-profile-small.svg" alt="프로필 사진" />
      </div>
      <section class="feed">
        <div class="feed-header">
          <p class="feed-title">애월읍 위니브 감귤농장</p>
          <p class="feed-writer">&#64;weniv_Mandarin</p>
        </div>
        <div class="feed-content">
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          {/* 조건부 렌더링 : 이미지 데이터가 있을경우에 렌더링*/}
          <img src={feedImage} alt="피드 사진" />
        </div>
        <div class="feed-info">
          <div class="icons">
            <div class="hearts">
              <button class="btn-hearts">
                <span class="a11y-hidden">좋아요 버튼</span>
              </button>
              <span>58</span>
            </div>
            <div class="comments">
              <button class="btn-comments">
                <span class="a11y-hidden">댓글목록 보기</span>
              </button>
              <span>12</span>
            </div>
          </div>
          <time datetime="2020-10-21">2020년 10월 21일</time>
        </div>
      </section>
    </StyledHomeFeed>
  );
}
