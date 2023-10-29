import React from 'react';
import { styled, keyframes } from 'styled-components';

const modalAnimation = keyframes`
  0% {
    bottom: -10%
  }
  100% {
    bottom: 0;
  }
`;

const StyledModalDeclareComment = styled.div`
  background-color: #fff;
  width: 390px;
  margin: 0 auto;
  padding-top: 16px;
  border-radius: 10px 10px 0 0;
  /* z-index: 1000; */

  position: absolute;
  z-index: 10;
  animation: ${modalAnimation} 1s ease forwards;

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
    <StyledModalDeclareComment>
      <div className="modal-line"></div>
      <div className="wrapper-btn">
        <button type="button" className="btn-delete">
          신고하기
        </button>
      </div>
    </StyledModalDeclareComment>
  );
}
