import React from 'react';
import styled from 'styled-components';

const StyledMoreCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;

  & .icon-cate img {
    width: 40px;
    height: 40px;
  }
  & .cate-txt {
    margin-top: 10px;
  }
`;
export default function MoreCategory() {
  return (
    <StyledMoreCategory>
      <a href="">
        <img src="../../../images/location.svg" alt="위치 찾기" />
        <div className="cate-txt">위치 찾기</div>
      </a>
    </StyledMoreCategory>
  );
}
