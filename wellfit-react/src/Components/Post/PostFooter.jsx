import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import profileImage from '../../images/basic-profile-small.svg';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  & .form-comment-wrapper {
    padding: 12.5px 16px 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
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
  & .form-comment-wrapper .btn-comment-submit.active {
    color: #515fec;
  }
`;

export default function PostFooter({ addComment }) {
  // postFooter에서 addCommet으로 postContent에 데이터를 전달하면
  // postContent에서 데이터를 추가하고 그 데이터를 다시 postCommentList에 전달
  // 이떄 addComment에 전달해야할 데이터의 형태는 객체이고
  // 키 값으로는 id, 프로필이미지, 내용, 유저이름, 작성시간이다.
  const [comment, setComment] = useState('');
  const [date, setDate] = useState();

  //
  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const createDate = new Date();
    setDate(createDate);

    addComment();
  };
  return (
    <StyledFooter>
      <form className="form-comment-wrapper" action="#" onSubmit={onSubmit}>
        <img src={profileImage} alt="프로필 사진" />
        <div className="input-comment-wrapper">
          <label for="input-comment" className="a11y-hidden">
            댓글 입력
          </label>
          <input
            type="text"
            id="input-comment"
            className="input-comment"
            placeholder="댓글 입력하기..."
            value={comment}
            onChange={onChangeCommentHandler}
          />
        </div>
        <button
          className={[
            'btn-comment-submit',
            `${comment.length === 0 ? '' : 'active'}`,
          ].join(' ')}
        >
          게시
        </button>
      </form>
    </StyledFooter>
  );
}
