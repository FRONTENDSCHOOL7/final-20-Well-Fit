import React from 'react';
import { styled } from 'styled-components';

const StyledModalDeleteComment = styled.div`
  background-color: #fff;
  width: 390px;
  margin: 0 auto;
  padding-top: 16px;
  border-radius: 10px 10px 0 0;

  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .modal-line {
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    margin: 0 auto 16px;
    border-radius: 5px;
  }

  & .btn-delete {
    padding: 14px 0 14px 26px;
    text-align: left;
    width: 100%;
  }
`;
export default function ModalDeleteComment({ text }) {
  return (
    <StyledModalDeleteComment>
      <div className="modal-line"></div>
      <div className="wrapper-btn">
        <button type="button" className="btn-delete">
          삭제
        </button>
      </div>
    </StyledModalDeleteComment>
  );
}
