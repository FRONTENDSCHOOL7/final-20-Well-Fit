import React from 'react';
import { styled } from 'styled-components';
import Img404 from '../../images/logo-notfound.svg';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <StyledPage404>
      <img src={Img404} alt="404로고" />
      <p>페이지를 찾을 수 없습니다. :(</p>
      <button className="btn-return" onClick={handleGoBack}>
        이전 페이지
      </button>
    </StyledPage404>
  );
}

const StyledPage404 = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 844px;
  background-color: #fff;

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
