import React from 'react';
import styled from 'styled-components';

const StyledModalListGoods = styled.article`
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
  .btn-fix,
  .btn-see {
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

export default function ModalListGoods() {
  return (
    <StyledModalListGoods>
      <div className="mark-wrapper">
        <div className="mark"></div>
      </div>
      <button className="btn-delete" type="button">
        삭제
      </button>
      <button className="btn-fix" type="button">
        수정
      </button>
      <button className="btn-see" type="button">
        웹사이트에서 상품 보기
      </button>
    </StyledModalListGoods>
  );
}
