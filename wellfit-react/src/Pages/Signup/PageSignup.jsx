import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import AccountButton from '../../Components/Button/AccountButton';

export default function PageSignup() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // 이메일 유효성 검사
  const handleInputEmail = (e) => {
    const userEmail = e.target.value;
    const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (userEmail === '') {
      setEmailErrorMsg('*입력해주세요');
    } else if (!emailRegEx.test(userEmail)) {
      setEmailErrorMsg('*이메일의 형식이 올바르지 않습니다.');
    } else {
      setEmailValid(true);
      setEmailErrorMsg('');
      setUserEmail(userEmail);
    }
  };

  // 비밀번호 유효성 검사
  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    const passwordRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    if (!passwordRegEx.test(userPassword)) {
      setPasswordErrorMsg(
        '*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요'
      );
    } else {
      setPasswordValid(true);
      setPasswordErrorMsg('');
      setUserPassword(userPassword);
    }
  };

  // 에러메세지 초기화
  useEffect(() => {
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
  }, [userEmail]);

  useEffect(() => {
    setPasswordErrorMsg('');
  }, [userPassword]);

  // 이메일, 비밀번호 조건 충족시....
  const handleSignup = async (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
    }
  };

  // 버튼 활성화
  const handleActivateButton = () => {
    return emailValid && passwordValid;
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
          <AccountButton text="다음" disabled={!handleActivateButton()} />
        </SignupForm>
      </SignupMain>
    </StyledWrap>
  );
}

const StyledWrap = styled.div`
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
