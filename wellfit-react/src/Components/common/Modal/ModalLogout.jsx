import React from 'react';
import styled from 'styled-components';

const StyledModalLogout = styled.article`
  margin: 0 auto;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  background-color: #fff;

  & .logout-alert {
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
  .btn-logout {
    width: 126px;
    height: 46px;
    border-top: 0.5px solid #dbdbdb;

    color: #000;
    font-size: 14px;
    font-weight: 500;
  }
  & .btn-logout {
    border-left: 0.5px solid #dbdbdb;
    color: #004aad;
  }
`;

export default function ModalLogout() {
  return (
    <StyledModalLogout>
      <div className="logout-alert">
        <p>로그아웃 하시겠어요?</p>
      </div>
      <span className="btn-wrapper">
        <button className="btn-cancel" type="button">
          취소
        </button>
        <button className="btn-logout" type="button">
          로그아웃
        </button>
      </span>
    </StyledModalLogout>
  );
}
