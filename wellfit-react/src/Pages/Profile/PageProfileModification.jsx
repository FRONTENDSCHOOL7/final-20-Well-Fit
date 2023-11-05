import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProfileHeader from '../../Components/common/Header/ProfileHeader';
import Input from '../../Components/Input/Input';
import BasicProfileImage from '../../images/basic-profile.svg';
import UploadImage from '../../images/upload-file.svg';
import { useNavigate } from 'react-router-dom';
import { getMyInfo } from '../../api/PostMyInfo';
import { postAccountnameDuplicate } from '../../api/PostSignup';
import { UserContext } from '../../Contexts/UserContext';
import { postUploadImage } from '../../api/PostUploadImage';
import { putProfileEdit } from '../../api/PutProfileEdit';

export default function PageProfileModification() {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const formData = new FormData();
  const [userName, setUserName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
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
  const { userInfo, setUserInfo } = useContext(UserContext);

  //기본 프로필 불러오기
  useEffect(() => {
    const fetchMyInfo = async () => {
      const profileData = await getMyInfo();
      console.log('ok', profileData); // 데이터 넘겨받아올때는 늘 잘 넘어왔나 확인해주기!
      setUserInfo((prev) => ({
        ...prev,
        username: profileData.user.username,
        accountname: profileData.user.accountname,
        intro: profileData.user.intro,
        image: profileData.user.image,
      }));
    };
    fetchMyInfo();
  }, []);

  // 이미지 업로드
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // 이미지 미리보기 처리
      const reader = new FileReader();
      reader.onload = (event) => {
        // 미리보기 이미지를 상태로 설정
        setPreviewImage(event.target.result);
      };
      reader.readAsDataURL(file);

      // 이미지 업로드 처리
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await postUploadImage(formData);
        setImage(response.newFileName);
      } catch (error) {
        console.error('이미지 업로드에 실패했습니다.');
      }
    }
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
  const handleInputAccountId = async (e) => {
    const accountId = e.target.value;
    const accountIdRegEx = /^[a-zA-Z0-9._]+$/;
    const checkAccountname = await postAccountnameDuplicate(accountId);
    if (accountId === '') {
      setAccountIdErrorMsg('*입력해 주세요.');
      setAccountIdValid(false);
    } else if (checkAccountname.message === '이미 가입된 계정ID 입니다.') {
      setAccountIdErrorMsg('*이미 가입된 계정ID 입니다.');
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

  // 소개
  const handleInputIntro = (e) => {
    const intro = e.target.value;
    setIntro(intro);
  };

  // tall 유효성 검사
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

  // weight 유효성 검사
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

  // 프로필 수정
  const handleProfileModification = async (e) => {
    e.preventDefault();
    if (
      userNameValid &&
      accountIdValid &&
      tall &&
      weight &&
      selectedAge &&
      selectedAge !== '나이'
    ) {
      await putProfileEdit({
        userName,
        accountId,
        intro,
        image,
      });
      setUserInfo({
        ...userInfo,
        username: userName,
        accountname: accountId,
        intro: intro,
        image: image,
      });
      navigate('/myprofile');
    } else {
      console.error('프로필 설정 중 오류가 발생했습니다.');
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
    <>
      <ProfileHeader
        text="저장"
        disabled={!handleActivateButton()}
        onClick={handleProfileModification}
      />
      <StyledProfileWrap>
        <Main>
          <Title className="a11y-hidden">프로필 설정</Title>
          <Form onSubmit={handleProfileModification}>
            <ImgContainer>
              <ImgLabel htmlFor="upload-img">
                <Image
                  src={previewImage ? previewImage : BasicProfileImage}
                  alt="기본 프로필"
                />
              </ImgLabel>
              <ImgInput
                id="upload-img"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                ref={fileInputRef}
                onChange={handleInputImage}
              />
            </ImgContainer>
            <Input
              label="사용자 이름"
              placeholder="2~10자 이내여야 합니다."
              id="username"
              type="text"
              name="username"
              onChange={handleInputUserName}
              required
            />
            {userNameErrorMsg && (
              <ErrorMessage>{userNameErrorMsg}</ErrorMessage>
            )}
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
          </Form>
        </Main>
      </StyledProfileWrap>
    </>
  );
}

const StyledProfileWrap = styled.div`
  width: 390px;
  height: 785px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 0 auto;
`;

const Title = styled.h1``;

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

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

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
