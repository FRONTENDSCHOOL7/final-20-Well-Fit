import React from 'react';
import { styled } from 'styled-components';
import BlackLogo from '../../images/logo-black.svg';

export default function SplashPage() {
  return (
    <StyledSplashPage>
      <Img src={BlackLogo} alt="웰핏 로고" />
    </StyledSplashPage>
  );
}

const StyledSplashPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 844px;
  background-color: #fff;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;
