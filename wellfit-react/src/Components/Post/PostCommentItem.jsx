import React from 'react';
import { styled } from 'styled-components';

const StyledPostCommentItem = styled.li`
  /* section-comment 시작 */
  & .comment {
    display: flex;
    align-items: flex-start;
    gap: 12px;
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
    background-image: url('../../../../images/m-icon-more-vertical.svg');
    width: 20px;
    height: 20px;
  }
  & .comment .comment-text {
    margin-top: 16px;
    color: #333;
  }
  /* section-comment 끝 */
`;

export default function PostCommentItem() {
  return (
    <StyledPostCommentItem>
      <div className="comment">
        <img
          src="../../../../images/basic-profile-small.svg"
          alt="프로필 사진"
          className="img-comment-profile"
        />
        <div className="comment-content-wrapper">
          <div className="comment-info">
            <div>
              <strong>서귀포시 무슨 농장</strong>
              <time dateTime="">· 5분 전</time>
            </div>
            <button type="button" className="btn-comment-toggle">
              <span className="a11y-hidden">토글</span>
            </button>
          </div>
          <p className="comment-text">게시글 답글 ~~ !! 최고최고</p>
        </div>
      </div>
    </StyledPostCommentItem>
  );
}
