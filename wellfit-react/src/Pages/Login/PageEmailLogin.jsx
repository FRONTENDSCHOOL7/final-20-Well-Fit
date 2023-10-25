import React from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;

  & .main-login {
    margin: 0 auto;
  }

  & .main-login h1 {
    padding-top: 30px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
  }

  & .form-login section {
    margin-bottom: 3px;
  }

  & .btn-login {
    color: #fff;
    width: 322px;
    height: 44px;
    padding: 13px 0;
    border-radius: 44px;
    font-size: 14px;
    background-color: #97b2de;
  }
  & .main-login a {
    display: block;
    padding-top: 20px;
    font-size: 12px;
    text-align: center;
  }
`;

export default function PageEmailLogin() {
  return (
    <StyledWrap>
      <main className="main-login">
        <h1>로그인</h1>
        <form className="form-login">
          <section>
            <Input />
            <Input />
          </section>
          <button className="btn-login">로그인</button>
        </form>
        <a href="">이메일로 회원가입</a>
      </main>
    </StyledWrap>
  );
}
