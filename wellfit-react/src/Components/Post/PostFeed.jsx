import React from 'react';
import { styled } from 'styled-components';
import feedImage from './images/unsplash_FWtiv70Z_ZY.png';

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
    background-image: url('../../../../images/s-icon-more-vertical.svg');
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
  & .feed .feed-info .hearts .btn-hearts {
    background-image: url('../../../../images/icon-heart.svg');
  }
  & .feed .feed-info .comments .btn-comments {
    background-image: url('../../../../images/icon-message-circle.svg');
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

  /* feed 끝 */

  /* post-detail-mine-content 끝 */
`;

export default function PostFeed() {
  return (
    <StyledPostFeed>
      <h2 class="a11y-hidden">게시물 자세히보기</h2>
      <div class="img-profile">
        <img
          src="../../../../images/basic-profile-small.svg"
          alt="프로필 이미지"
        />
      </div>
      <section class="feed">
        <div class="feed-header">
          <p class="feed-title">애월읍 위니브 감귤농장</p>
          <p class="feed-writer">&#64;weniv_Mandarin</p>
          <button type="button" class="btn-post-toggle">
            <span class="a11y-hidden">토글</span>
          </button>
        </div>
        <div class="feed-content">
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <img class="img-feed" src={feedImage} alt="" />
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
    </StyledPostFeed>
  );
}
