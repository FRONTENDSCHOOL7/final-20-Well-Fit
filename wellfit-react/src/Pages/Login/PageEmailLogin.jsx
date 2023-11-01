import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import AccountButton from '../../Components/Button/AccountButton';
import { useNavigate, Link } from 'react-router-dom';
import { PostLogin } from '../../api/PostLogin';
import { UserContext } from '../../Contexts/UserContext';

export default function PageEmailLogin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  // 이메일 입력
  const handleInputEmail = (e) => {
    setUserEmail(e.target.value);
    setErrorMsg('');
    checkButtonActive(e.target.value, userPassword);
  };

  // 비밀번호 입력
  const handleInputPassword = (e) => {
    setUserPassword(e.target.value);
    setErrorMsg('');
    checkButtonActive(userEmail, e.target.value);
  };

  // 로그인 요청 후 결과
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = await PostLogin(userEmail, userPassword);
      if (loginData && loginData.status === 422) {
        setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        setUserInfo({
          _id: loginData.user._id,
          accountname: loginData.user.accountname,
          email: loginData.user.email,
          username: loginData.user.username,
          image: loginData.user.image,
          intro: loginData.user.intro,
        });
        localStorage.setItem('token', loginData.user.token);
        setErrorMsg('');
        navigate('/home');
      }
    } catch (error) {
      setErrorMsg('로그인 중 오류가 발생했습니다.');
    }
  };

  // 버튼 활성화
  const checkButtonActive = (email, password) => {
    setButtonActive(email !== '' && password !== '');
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
          <AccountButton text="로그인" disabled={!buttonActive} />
        </LoginForm>
        <LinkToSignup to="/mainlogin/signup">이메일로 회원가입</LinkToSignup>
      </LoginMain>
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

const LinkToSignup = styled(Link)`
  display: block;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;
`;
