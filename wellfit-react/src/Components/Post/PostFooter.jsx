import React from 'react';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  & .form-comment-wrapper {
    padding: 12.5px 16px 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & .form-comment-wrapper .input-comment-wrapper {
    flex: 1;
    display: flex;
  }

  & .input-comment-wrapper .input-comment {
    border: none;
    border-radius: 32px;
    padding: 10px;
    flex: 1;
  }
  & .form-comment-wrapper .btn-comment-submit {
    color: #c4c4c4;
  }
`;

export default function PostFooter() {
  return (
    <StyledFooter>
      <form className="form-comment-wrapper" action="#">
        <img
          src="../../../../images/basic-profile-small.svg"
          alt="프로필 사진"
        />
        <div className="input-comment-wrapper">
          <label for="input-comment" className="a11y-hidden">
            댓글 입력
          </label>
          <input
            type="text"
            id="input-comment"
            className="input-comment"
            placeholder="댓글 입력하기..."
          />
        </div>
        <button className="btn-comment-submit">게시</button>
      </form>
    </StyledFooter>
  );
}
