import React from 'react';
import styled from 'styled-components';

const StyledModalUserList = styled.article`
  margin: 0 auto;
  width: 390px;
  height: 138px;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

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
  & .btn-delete,
  .btn-fix {
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
export default function ModalUserList() {
  return (
    <StyledModalUserList>
      <div className="mark-wrapper">
        <div className="mark"></div>
      </div>
      <button className="btn-delete" type="button">
        설정 및 개인정보
      </button>
      <button className="btn-fix" type="button">
        로그아웃
      </button>
    </StyledModalUserList>
  );
}
