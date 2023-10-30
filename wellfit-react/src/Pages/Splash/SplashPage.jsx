import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import BlackLogo from '../../images/logo-black.svg';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mainlogin');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
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
