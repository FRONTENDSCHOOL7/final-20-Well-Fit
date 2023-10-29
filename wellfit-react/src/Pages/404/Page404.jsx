import React from 'react';
import { styled } from 'styled-components';
import NotLogo from '../../images/logo-notfound.svg';

const StyledPage404 = styled.main`
  position: relative;
  margin: 200px auto;
  text-align: center;

  & p {
    color: #767676;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  & .btn-return {
    color: #fff;
    width: 120px;
    height: 44px;
    padding: 13px 0;
    border-radius: 44px;
    font-size: 14px;
    background-color: #004aad;
  }
`;

export default function Page404() {
  return (
    <StyledPage404>
      <img src={NotLogo} alt="404로고" />
      <p>페이지를 찾을 수 없습니다. :(</p>
      <button className="btn-return">이전 페이지</button>
    </StyledPage404>
  );
}
