import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input/Input';
import AccountButton from '../../Components/Button/AccountButton';
import ProfileImage from '../../images/basic-profile.svg';
import UploadImage from '../../images/upload-file.svg';

export default function PageProfileSetting() {
  const [userName, setUserName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [tall, setTall] = useState(0);
  const [weight, setWeight] = useState(0);
  const [userNameErrorMsg, setUserNameErrorMsg] = useState('');
  const [accountIdErrorMsg, setAccountIdErrorMsg] = useState('');
  const [tallErrorMsg, setTallErrorMsg] = useState('');
  const [weightErrorMsg, setWeightErrorMsg] = useState('');
  const [userNameValid, setUserNameValid] = useState(false);
  const [accountIdValid, setAccountIdValid] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  const [ageErrorMsg, setAgeErrorMsg] = useState('');

  // 이미지 업로드 - 추후에 구현할 예정
  const handleInputImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // 소개
  const handleInputIntro = (e) => {
    const intro = e.target.value;
    setIntro(intro);
  };

  // userName 유효성 검사
  const handleInputUserName = (e) => {
    const userName = e.target.value;
    const userNameRegEx = /^.{2,10}$/;
    if (userName === '') {
      setUserNameErrorMsg('*입력해 주세요.');
    } else if (!userNameRegEx.test(userName)) {
      setUserNameErrorMsg('*2~10자 이내로 입력해 주세요.');
      setUserNameValid(false);
    } else {
      setUserNameErrorMsg('');
      setUserNameValid(true);
      setUserName(userName);
    }
  };

  // accountId 유효성 검사 - 이미 존재하는 계정은 구현 못함. 추후 할 예정
  const handleInputAccountId = (e) => {
    const accountId = e.target.value;
    const accountIdRegEx = /^[a-zA-Z0-9._]+$/;
    if (accountId === '') {
      setAccountIdErrorMsg('*입력해 주세요.');
      setAccountIdValid(false);
    } else if (!accountIdRegEx.test(accountId)) {
      setAccountIdErrorMsg('*영문, 숫자, 특수문자 ., _ 만 입력해주세요.');
      setAccountIdValid(false);
    } else {
      setAccountIdValid(true);
      setAccountIdErrorMsg('');
      setAccountId(accountId);
    }
  };

  // tall
  const handleInputTall = (e) => {
    const tall = e.target.value;
    const tallRegEx = /^[0-9]{2,3}$/;
    if (tall === '') {
      setTallErrorMsg('*입력해 주세요.');
    } else if (!tallRegEx.test(tall)) {
      setTallErrorMsg('*2~3자리 숫자만 입력해 주세요.');
    } else {
      setTallErrorMsg('');
      setTall(tall);
    }
  };

  // weight
  const handleInputWeight = (e) => {
    const weight = e.target.value;
    const weightRegEx = /^[0-9]{2,3}$/;
    if (weight === '') {
      setWeightErrorMsg('*입력해 주세요.');
    } else if (!weightRegEx.test(weight)) {
      setWeightErrorMsg('*2~3자리 숫자만 입력해 주세요.');
    } else {
      setWeightErrorMsg('');
      setWeight(weight);
    }
  };

  // 나이 선택
  const handleSelectChange = (e) => {
    setSelectedAge(e.target.value);
    if (e.target.value === '나이') {
      setAgeErrorMsg('*나이를 선택해주세요.');
    } else {
      setAgeErrorMsg('');
    }
  };

  // 에러 메세지 초기화
  useEffect(() => {
    setUserNameErrorMsg('');
  }, [userName]);

  useEffect(() => {
    setAccountIdErrorMsg('');
  }, [accountId]);

  useEffect(() => {
    setTallErrorMsg('');
  }, [tall]);

  useEffect(() => {
    setWeightErrorMsg('');
  }, [weight]);

  // 프로필 세팅 전송
  const handleProfileSetting = (e) => {
    e.preventDefault();
    if (
      userNameValid &&
      accountIdValid &&
      tall &&
      weight &&
      selectedAge &&
      selectedAge !== '나이'
    ) {
    }
  };

  // 버튼 활성화
  const handleActivateButton = () => {
    return (
      userNameValid &&
      accountIdValid &&
      tall &&
      weight &&
      selectedAge &&
      selectedAge !== '나이'
    );
  };

  return (
    <StyledProfileWrap>
      <Main>
        <Title>프로필 설정</Title>
        <Txt>나중에 언제든지 변경할 수 있습니다.</Txt>
        <Form onSubmit={handleProfileSetting}>
          <ImgContainer>
            <ImgLabel htmlFor="upload-img">
              <Image src={ProfileImage} alt="기본 프로필" />
            </ImgLabel>
            <ImgInput id="upload-img" type="file" onChange={handleInputImage} />
          </ImgContainer>
          <Input
            label="사용자 이름"
            placeholder="영문 2~10자 이내여야 합니다."
            id="username"
            type="text"
            name="username"
            onChange={handleInputUserName}
            required
          />
          {userNameErrorMsg && <ErrorMessage>{userNameErrorMsg}</ErrorMessage>}
          <Input
            label="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            id="accountname"
            type="text"
            name="accountname"
            onChange={handleInputAccountId}
            required
          />
          {accountIdErrorMsg && (
            <ErrorMessage>{accountIdErrorMsg}</ErrorMessage>
          )}
          <Input
            label="소개"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            id="intro"
            type="text"
            name="intro"
            onChange={handleInputIntro}
            required
          />
          <Input
            label="키"
            placeholder="키를 입력해 주세요. (예: 178)"
            id="tall"
            type="number"
            name="tall"
            onChange={handleInputTall}
            required
          />
          {tallErrorMsg && <ErrorMessage>{tallErrorMsg}</ErrorMessage>}
          <Input
            label="몸무게"
            placeholder="몸무게를 입력해 주세요. (예: 78)"
            id="weight"
            type="number"
            name="weight"
            onChange={handleInputWeight}
            required
          />
          {weightErrorMsg && <ErrorMessage>{weightErrorMsg}</ErrorMessage>}
          <SelectContainer>
            <Select onChange={handleSelectChange}>
              <Option>나이</Option>
              <Option>10대 이상</Option>
              <Option>20대 이상</Option>
              <Option>30대 이상</Option>
              <Option>40대 이상</Option>
              <Option>50대 이상</Option>
              <Option>60대 이상</Option>
            </Select>
            {ageErrorMsg && (
              <ErrorMessage className="age">{ageErrorMsg}</ErrorMessage>
            )}
          </SelectContainer>
          <AccountButton
            text="설정완료"
            disabled={!handleActivateButton()}
            onClick={handleProfileSetting}
          />
        </Form>
      </Main>
    </StyledProfileWrap>
  );
}

const StyledProfileWrap = styled.div`
  width: 390px;
  height: 844px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  padding-top: 30px;
`;

const Txt = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 12px;
`;

const Form = styled.form``;

const ImgContainer = styled.div``;

const ImgLabel = styled.label`
  display: block;
  position: relative;
  margin: 30px auto 30px;
  width: 110px;
  height: 110px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background: url(${UploadImage}) no-repeat center / 36px 36px;
  }
`;

const Image = styled.img``;

const ImgInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
`;

const ErrorMessage = styled.p`
  align-self: self-start;
  color: #eb5757;
  font-size: 12px;
  margin-top: -10px;

  &.age {
    margin-top: 6px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin-top: 16px;
  margin-bottom: 30px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 12px;
`;

const Option = styled.option``;
