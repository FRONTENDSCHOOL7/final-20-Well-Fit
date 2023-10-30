import React from 'react';
import styled from 'styled-components';
import YellowLogo from '../../images/logo-yellow.svg';
import Google from '../../images/Google__G__Logo 1.svg';
import Kakao from '../../images/message-circle.svg';
import Face from '../../images/facebook.svg';
import Naver from '../../images/naver.svg';
import { Link } from 'react-router-dom';

export default function PageSnsLogin() {
  return (
    <StyledPageSnsLogin>
      <Header>
        <Title className="a11y-hidden">well-fit SNS 로그인</Title>
        <LogoImg src={YellowLogo} alt="웰핏 로고" />
      </Header>
      <Main>
        <ButtonContainer>
          <Button className="kakao">
            <SnsImage src={Kakao} alt="카카오톡" />
            카카오톡 계정으로 로그인
          </Button>
          <Button className="google">
            <GoogleImgae src={Google} alt="구글" />
            구글 계정으로 로그인
          </Button>
          <Button className="face">
            <SnsImage src={Face} alt="페이스북" />
            페이스북 계정으로 로그인
          </Button>
          <Button className="naver">
            <NaverImage src={Naver} alt="네이버" />
            네이버 계정으로 로그인
          </Button>
        </ButtonContainer>
        <LinkContainer>
          <Link to="/mainlogin/emaillogin" className="login-go">
            이메일로 로그인
          </Link>
          <Link to="/mainlogin/signup" className="signup-go">
            회원가입
          </Link>
        </LinkContainer>
      </Main>
    </StyledPageSnsLogin>
  );
}

const StyledPageSnsLogin = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #092147;

  & .div-a {
    margin-top: 20px;
    text-align: center;
  }
  & .div-a a {
    color: #767676;
    font-size: 12px;
  }
  & .link-email::after {
    content: '|';
    padding: 12px;
    color: #c4c4c4;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

const LogoImg = styled.img`
  margin: 100px auto;
  width: 350px;
  height: 350px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 390px;
  height: 320px;
  padding: 50px 34px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #767676;
  width: 322px;
  height: 44px;
  padding: 13px 14px;
  border-radius: 44px;
  font-size: 14px;

  &.kakao {
    border: 1px solid #f2c94c;
  }
  &.google {
    border: 1px solid #767676;
  }
  &.face {
    border: 1px solid #2d9cdb;
  }
  &.naver {
    border: 1px solid #00bf18;
  }
`;

const SnsImage = styled.img`
  margin-right: 50px;
  width: 24px;
  height: 24px;
`;

const GoogleImgae = styled.img`
  margin-right: 60px;
  width: 24px;
  height: 24px;
`;

const NaverImage = styled.img`
  margin-right: 55px;
  width: 24px;
  height: 24px;
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  & .login-go {
    color: #767676;
    font-size: 12px;
  }

  & .signup-go {
    color: #767676;
    font-size: 12px;
  }

  &.login-go::after {
    content: '|';
    padding: 12px;
    color: #c4c4c4;
  }
`;
