import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import AccountButton from '../../Components/Button/AccountButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { postEmailDuplicate } from '../../api/PostSignup';

export default function PageSignup() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isButtonActivated, setIsButtonActivated] = useState(false);

  // 이메일 유효성 및 중복 검사
  const handleInputEmail = async (e) => {
    const email = e.target.value;
    const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setUserEmail(email);

    if (email === '') {
      setEmailErrorMsg('*입력해주세요');
      setEmailValid(false);
    } else if (!emailRegEx.test(email)) {
      setEmailErrorMsg('*이메일의 형식이 올바르지 않습니다.');
      setEmailValid(false);
    } else {
      try {
        const checkEmail = await postEmailDuplicate(email);
        if (checkEmail.message === '이미 가입된 이메일 주소 입니다.') {
          setEmailErrorMsg('*이미 가입된 이메일 주소 입니다.');
          setEmailValid(false);
        } else {
          setEmailValid(true);
          setEmailErrorMsg('');
        }
      } catch (error) {
        setEmailErrorMsg('*이메일 확인 중 오류가 발생했습니다.');
      }
    }
  };

  // 비밀번호 유효성 검사
  const handleInputPassword = (e) => {
    const password = e.target.value;
    const passwordRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    setUserPassword(password);

    if (!passwordRegEx.test(password)) {
      setPasswordErrorMsg(
        '*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요'
      );
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
      setPasswordErrorMsg('');
    }
  };

  // 이메일 및 비밀번호 변화 감지 및 버튼 활성화
  useEffect(() => {
    setIsButtonActivated(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  // 에러메세지 초기화
  useEffect(() => {
    if (userEmail === '') setEmailErrorMsg('');
    if (userPassword === '') setPasswordErrorMsg('');
  }, [userEmail, userPassword]);

  // 이메일, 비밀번호 조건 충족시....
  const handleSignup = async (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
      navigate('/mainlogin/signup/profilesetting', {
        state: {
          email: userEmail,
          password: userPassword,
        },
      });
    } else {
      console.error('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <StyledWrap>
      <SignupMain>
        <SignupTitle>이메일로 회원가입</SignupTitle>
        <SignupForm onSubmit={handleSignup}>
          <SignupSection>
            <Input
              className="star"
              label="이메일"
              placeholder="이메일 주소를 입력해주세요"
              id="email"
              type="email"
              name="email"
              onChange={handleInputEmail}
              required
            />
            {emailErrorMsg && (
              <StyledErrorMessage>{emailErrorMsg}</StyledErrorMessage>
            )}
            <Input
              className="star"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              id="password"
              type="password"
              name="password"
              onChange={handleInputPassword}
              required
            />
            {passwordErrorMsg && (
              <StyledErrorMessage>{passwordErrorMsg}</StyledErrorMessage>
            )}
          </SignupSection>
          <AccountButton text="다음" disabled={!isButtonActivated} />
        </SignupForm>
      </SignupMain>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const SignupMain = styled.main`
  margin: 0 auto;
`;

const SignupTitle = styled.h1`
  padding-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 24px;
`;

const SignupForm = styled.form``;

const SignupSection = styled.section`
  margin-bottom: 30px;
`;

const StyledErrorMessage = styled.p`
  margin-top: -10px;
  font-size: 12px;
  color: #eb5757;
`;
