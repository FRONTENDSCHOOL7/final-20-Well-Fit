import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import moreVerticalIcon from '../../images/s-icon-more-vertical.svg';
import profileBasicImage from '../../images/basic-profile-small.svg';

const StyledPostCommentItem = styled.li`
  /* section-comment 시작 */
  & .comment {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 10px;
  }
  & .comment img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fir: cover;
  }
  & .comment .comment-content-wrapper {
    flex: 1;
  }
  & .comment .comment-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  }
  & .comment .comment-info time {
    font-size: 10px;
    margin-left: 6px;
    color: #767676;
  }
  & .comment .comment-info .btn-comment-toggle {
    width: 18px;
    height: 18px;
  }
  & .btn-comment-toggle img {
    width: 100%;
    height: 100%;
  }
  & .comment .comment-text {
    margin-top: 16px;
    color: #333;
  }
  /* section-comment 끝 */
`;

export default function PostCommentItem({ modalHandler, comment }) {
  console.log(comment);
  const serverStandardImg = 'http://146.56.183.55:5050/Ellipse.png';

  const calculateTimeAgo = (date) => {
    const commentTime = new Date(date);
    const currentTime = new Date();
    const diffSeconds = Math.floor((currentTime - commentTime) / 1000);

    if (diffSeconds < 60) {
      return `${diffSeconds}초 전`;
    } else if (diffSeconds < 3600) {
      return `${Math.floor(diffSeconds / 60)}분 전`;
    } else if (diffSeconds < 86400) {
      return `${Math.floor(diffSeconds / 3600)}시간 전`;
    } else {
      return `${Math.floor(diffSeconds / 86400)}일 전`;
    }
  };

  // 서버 기본이미지인지 확인
  const checkAuthorImg = (authorImage) => {
    if (authorImage === serverStandardImg) {
      return profileBasicImage;
    } else {
      return authorImage;
    }
  };

  // 모달
  // 내 댓글인지 아닌지는 token값으로 확인
  const onClickModalHandler = () => {
    modalHandler();
  };

  if (!comment) {
    return <div>Loading...</div>;
  }
  return (
    <StyledPostCommentItem>
      <div className="comment">
        <img
          src={checkAuthorImg(comment.author.image)}
          alt="프로필 사진"
          className="img-comment-profile"
        />
        <div className="comment-content-wrapper">
          <div className="comment-info">
            <div>
              <strong>{comment.author.username}</strong>
              <time dateTime="">{calculateTimeAgo(comment.createdAt)}</time>
            </div>
            <button
              type="button"
              className="btn-comment-toggle"
              onClick={onClickModalHandler}
            >
              <img src={moreVerticalIcon} alt="토글" />
              <span className="a11y-hidden">토글</span>
            </button>
          </div>
          <p className="comment-text">{comment.content}</p>
        </div>
      </div>
    </StyledPostCommentItem>
  );
}
