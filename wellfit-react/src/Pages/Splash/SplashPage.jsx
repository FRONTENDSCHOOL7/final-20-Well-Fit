import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import BlackLogo from '../../images/logo-black.svg';

export default function SplashPage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userInfo && userInfo.username) {
        navigate('/home');
      } else {
        navigate('/mainlogin');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, userInfo]);

  return (
    <StyledSplashPage>
      <Img src={BlackLogo} alt="웰핏 로고" />
    </StyledSplashPage>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSplashPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 844px;
  background-color: #fffd8c;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  animation: ${fadeIn} 2s forwards;
`;
