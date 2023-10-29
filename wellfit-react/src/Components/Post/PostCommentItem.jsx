import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import moreVerticalIcon from '../../images/s-icon-more-vertical.svg';

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

export default function PostCommentItem({
  id,
  userName,
  content,
  profileImage,
  date,
  modalHandler,
}) {
  console.log(id, userName, content, profileImage, date);
  console.log(date);

  // 모달
  // 내 댓글인지 아닌지는 token값으로 확인
  const onClickModalHandler = () => {
    modalHandler();
  };

  return (
    <StyledPostCommentItem>
      <div className="comment">
        <img
          src={profileImage}
          alt="프로필 사진"
          className="img-comment-profile"
        />
        <div className="comment-content-wrapper">
          <div className="comment-info">
            <div>
              <strong>{userName}</strong>
              <time dateTime="">· 5분 전</time>
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
          <p className="comment-text">{content}</p>
        </div>
      </div>
    </StyledPostCommentItem>
  );
}
