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
export default function MoreCategory({ src, alt }) {
  return (
    <StyledMoreCategory>
      <a href="">
        <img src={src} alt={alt} />
        <div className="cate-txt">위치 찾기</div>
      </a>
    </StyledMoreCategory>
  );
}
