import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ModalLogout from './ModalLogout';

const fadeInUp = keyframes`
from {
  opacity: 0;
  visibility: hidden;
}
to {
  opacity: 1;
}
`;

const StyledModalBG = styled.div`
  position: fixed;
  top: 706px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 9999px;
  margin: 0 auto;
  width: 390px;
  height: 138px;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  animation: ${fadeInUp} 1s ease forwards;

  & .modal-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

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
  & .btn-setting,
  .btn-logout {
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    text-align: left;
    padding-left: 26px;

    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default function ModalUserList({ isModal }) {
  const [isLogout, setIsLogout] = useState(false);
  const handleCancelClick = () => {
    setIsLogout(!isLogout);
  };

  return (
    <>
      <StyledModalBG isOpen={isModal}>
        <article className="modal-wrapper">
          <div className="mark-wrapper">
            <div className="mark"></div>
          </div>
          <button className="btn-setting" type="button">
            설정 및 개인정보
          </button>
          <button
            className="btn-logout"
            type="button"
            onClick={() => {
              setIsLogout(!isLogout);
            }}
          >
            로그아웃
          </button>
        </article>
      </StyledModalBG>
      {isLogout ? (
        <ModalLogout
          isLogout={isLogout}
          handleCancelClick={handleCancelClick}
        />
      ) : null}
    </>
  );
}
