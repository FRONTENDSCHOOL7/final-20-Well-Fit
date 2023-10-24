import React from 'react';
import styled from 'styled-components';

const StyledModalDeletePost = styled.article`
  margin: 0 auto;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  background-color: #fff;

  & .delete-alert {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 64px;

    color: #000;
    font-size: 16px;
    font-weight: 500;
  }
  & .btn-wrapper {
    display: flex;
  }
  & .btn-cancel,
  .btn-delete {
    width: 126px;
    height: 46px;
    border-top: 0.5px solid #dbdbdb;

    color: #000;
    font-size: 14px;
    font-weight: 500;
  }
  & .btn-delete {
    border-left: 0.5px solid #dbdbdb;
    color: #004aad;
  }
`;

export default function ModalDeletePost() {
  return (
    <StyledModalDeletePost>
      <div className="delete-alert">
        <p>게시글을 삭제할까요?</p>
      </div>
      <span className="btn-wrapper">
        <button className="btn-cancel" type="button">
          취소
        </button>
        <button className="btn-delete" type="button">
          삭제
        </button>
      </span>
    </StyledModalDeletePost>
  );
}
