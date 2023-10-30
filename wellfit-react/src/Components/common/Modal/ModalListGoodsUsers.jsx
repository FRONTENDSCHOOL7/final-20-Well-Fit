import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledModalListGoodsUsers = styled.article`
  z-index: 200;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 390px;
  height: auto;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  animation: ${fadeInUp} 1s ease forwards;

  & .mark-wrapper {
    position: relative;
    height: 36px;
    width: 100%;
  }
  & .mark {
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    top: 50%;
    right: 50%;
    transform: translateX(50%);
  }
  & .btn-see {
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    text-align: left;
    padding-left: 26px;

    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  & .btn-see {
    padding-bottom: 10px;
  }
`;

export default function ModalListGoodsUsers() {
  return (
    <>
      <StyledModalListGoodsUsers>
        <div className="mark-wrapper">
          <div className="mark"></div>
        </div>
        <button className="btn-see" type="button">
          웹사이트에서 상품 보기
        </button>
      </StyledModalListGoodsUsers>
    </>
  );
}
