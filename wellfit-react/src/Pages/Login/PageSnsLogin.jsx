import React from 'react';
import styled from 'styled-components';

const StyledPageSnsLogin = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #092147;

  & .header-sns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .header-sns img {
    margin-top: 200px;
  }
  & .main-snslogin {
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
  }
  & .div-btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & .btn-sns {
    display: flex;
    align-items: center;
    color: #767676;
    width: 322px;
    height: 44px;
    padding: 13px 14px;
    border-radius: 44px;
    font-size: 14px;
  }
  & .btn-sns img {
    margin-right: 50px;
    width: 24px;
    height: 24px;
  }
  & .btn-sns.google img {
    margin-right: 60px;
    width: 24px;
    height: 24px;
  }
  & .btn-sns.naver img {
    margin-right: 55px;
    width: 24px;
    height: 24px;
  }
  & .kakao {
    border: 1px solid #f2c94c;
  }
  & .google {
    border: 1px solid #767676;
  }
  & .face {
    border: 1px solid #2d9cdb;
  }
  & .naver {
    border: 1px solid #00bf18;
  }
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
export default function PageSnsLogin() {
  return (
    <StyledPageSnsLogin>
      <header className="header-sns">
        <h1 className="a11y-hidden">well-fit SNS 로그인</h1>
        <img src="../../../images/logo-black.svg" alt="웰핏 로고" />
      </header>
      <main className="main-snslogin">
        <div className="div-btn">
          <button className="btn-sns kakao">
            <img src="../../../images/message-circle.svg" alt="카카오톡" />
            카카오톡 계정으로 로그인
          </button>
          <button className="btn-sns google">
            <img src="../../../images/Google__G__Logo 1.svg" alt="구글" />
            구글 계정으로 로그인
          </button>
          <button className="btn-sns face">
            <img src="../../../images/facebook.svg" alt="페이스북" />
            페이스북 계정으로 로그인
          </button>
          <button className="btn-sns naver">
            <img src="../../../images/naver.svg" alt="네이버" />
            네이버 계정으로 로그인
          </button>
        </div>
        <div className="div-a">
          <a className="link-email" href="">
            이메일로 로그인
          </a>
          <a href="">회원가입</a>
        </div>
      </main>
    </StyledPageSnsLogin>
  );
}
