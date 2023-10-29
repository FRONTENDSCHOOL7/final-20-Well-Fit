import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import AccountButton from '../../Components/Button/AccountButton';
import { PostLogin } from '../../api/postLogin';

export default function PageEmailLogin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // 로그인을 진행
  const postUserLogin = async (email, password) => {
    const option = {
      url: 'https://api.mandarin.weniv.co.kr/user/login',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        user: {
          email: email,
          password: password,
        },
      },
    };
    const response = await axios(option);
    return response.data;
  };

  // 이메일 입력
  const handleInputEmail = (e) => {
    setUserEmail(e.target.value);
    setErrorMsg('');
  };

  // 비밀번호 입력
  const handleInputPassword = (e) => {
    setUserPassword(e.target.value);
    setErrorMsg('');
  };

  // 로그인 요청 후 결과
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = await PostLogin(userEmail, userPassword);
      if (loginData && loginData.status === 422) {
        setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        localStorage.setItem('token', loginData.user.token);
      }
    } catch (error) {
      setErrorMsg('로그인 중 오류가 발생했습니다.');
    }
  };

  // 버튼 활성화
  const handleActiveButton = () => {
    return userEmail !== '' && userPassword !== '';
  };

  return (
    <StyledWrap>
      <LoginMain>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <LoginSection>
            <Input
              label="이메일"
              id="email"
              type="email"
              name="email"
              placeholder="이메일 주소를 입력해주세요"
              value={userEmail}
              required
              onChange={handleInputEmail}
            />
            <Input
              label="비밀번호"
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={userPassword}
              required
              onChange={handleInputPassword}
            />
            {errorMsg && <StyledErrorMessage>{errorMsg}</StyledErrorMessage>}
          </LoginSection>
          <AccountButton text="로그인" disabled={!handleActiveButton()} />
        </LoginForm>
        <LinkToSignup>이메일로 회원가입</LinkToSignup>
      </LoginMain>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginMain = styled.main`
  margin: 0 auto;
`;

const LoginTitle = styled.h1`
  padding-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 24px;
`;

const LoginForm = styled.form``;

const LoginSection = styled.section`
  margin-bottom: 30px;
`;

const StyledErrorMessage = styled.p`
  margin-top: -10px;
  font-size: 12px;
  color: #eb5757;
`;

const LinkToSignup = styled.a`
  display: block;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;
`;
