import React from 'react';
import { styled } from 'styled-components';

const StyledSplashPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & img {
    width: 200px;
    height: 200px;
  }
`;

export default function SplashPage() {
  return (
    <StyledSplashPage>
      <img src="../../../images/logo-black.svg" alt="웰핏 로고" />
    </StyledSplashPage>
  );
}
