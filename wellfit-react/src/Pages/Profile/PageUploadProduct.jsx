import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileHeader from '../../Components/common/Header/ProfileHeader';
import Input from '../../Components/Input/Input';
import AddProduct from '../../images/product-img.svg';
import UploadImage from '../../images/img-button.svg';

export default function PageUploadProduct() {
  const [image, setImage] = useState('');
  const [field, setField] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [imageErrorMsg, setImageErrorMsg] = useState('');
  const [fieldErrorMsg, setFieldErrorMsg] = useState('');
  const [priceErrorMsg, setPriceErrorMsg] = useState('');
  const [urlErrorMsg, setUrlErrorMsg] = useState('');

  // 이미지 업로드 - 추후 수정예정
  const handleInputImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file.name);
      setImageErrorMsg('');
    } else {
      setImage('');
      setImageErrorMsg('*이미지를 업로드해 주세요.');
    }
  };

  // 전문 분야
  const handleInputField = (e) => {
    const field = e.target.value;
    const fieldRegEx = /^.{2,15}$/;
    if (field === '') {
      setFieldErrorMsg('*입력해 주세요.');
    } else if (!fieldRegEx.test(field)) {
      setFieldErrorMsg('*2~15자 이내로 입력해 주세요.');
    } else {
      setFieldErrorMsg('');
      setField(field);
    }
  };

  // 수강료
  const handleInputPrice = (e) => {
    // 입력받은 값을 숫자만 추출
    let price = e.target.value;
    let priceValue = price.replace(/[^0-9]/g, '');
    if (!price) {
      setPriceErrorMsg('*입력해 주세요.');
      setPrice('');
    } else {
      setPriceErrorMsg('');
    }
    // 숫자를 쉼표가 있는 문자열로 변환
    const formattedValue = Number(priceValue).toLocaleString();
    if (formattedValue !== price) {
      e.target.value = formattedValue;
    }
    // 상태를 업데이트
    setPrice(priceValue);
  };

  // 판매 링크
  const handleInputUrl = (e) => {
    const url = e.target.value;
    const urlRegEx =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (url === '') {
      setUrlErrorMsg('*입력해 주세요.');
      setUrl('');
    } else if (!urlRegEx.test(url)) {
      setUrlErrorMsg('* 유효한 URL을 입력해 주세요.');
      setUrl('');
    } else {
      setUrlErrorMsg('');
      setUrl(url);
    }
  };

  // 에러 메세지 초기화
  useEffect(() => {
    setFieldErrorMsg('');
  }, [field]);

  useEffect(() => {
    setPriceErrorMsg('');
  }, [price]);

  useEffect(() => {
    setUrlErrorMsg('');
  }, [url]);

  // 상품 등록
  const handleUploadProduct = (e) => {
    e.preventDefault();
  };

  // 버튼 활성화
  const handleActivateButton = () => {
    return image && field && price && url;
  };

  return (
    <>
      <ProfileHeader text="저장" disabled={!handleActivateButton()} />
      <StyledProfileWrap>
        <Main>
          <Title className="a11y-hidden">상품 등록</Title>
          <Form onSubmit={handleUploadProduct}>
            <ImgContainer>
              <ImgLabel htmlFor="upload-img">
                <ImgTxt>이미지 등록</ImgTxt>
                <Image src={AddProduct} alt="기본 프로필" />
              </ImgLabel>
              <ImgInput
                id="upload-img"
                type="file"
                accept="image/*"
                onChange={handleInputImage}
              />
            </ImgContainer>
            {imageErrorMsg && <ErrorMessage>{imageErrorMsg}</ErrorMessage>}
            <Input
              label="전문 분야"
              placeholder="2~15자 이내여야 합니다."
              id="fieldname"
              type="text"
              name="fieldname"
              onChange={handleInputField}
              required
            />
            {fieldErrorMsg && <ErrorMessage>{fieldErrorMsg}</ErrorMessage>}
            <Input
              label="수강료"
              placeholder="숫자만 입력 가능합니다."
              id="ProductPrice"
              type="text"
              name="ProductPrice"
              onChange={handleInputPrice}
              required
            />
            {priceErrorMsg && <ErrorMessage>{priceErrorMsg}</ErrorMessage>}
            <Input
              label="판매 링크"
              placeholder="URL을 입력해 주세요."
              id="ProductURL"
              type="url"
              name="ProductURL"
              onChange={handleInputUrl}
              required
            />
            {urlErrorMsg && <ErrorMessage>{urlErrorMsg}</ErrorMessage>}
          </Form>
        </Main>
      </StyledProfileWrap>
    </>
  );
}

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 0 auto;
`;

const Title = styled.h1``;

const Form = styled.form``;

const ImgContainer = styled.div`
  margin: 30px auto;
  width: 322px;
  height: 236px;
`;

const ImgLabel = styled.label`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 12px;
    bottom: 14px;
    width: 36px;
    height: 36px;
    background: url(${UploadImage}) no-repeat center / 36px 36px;
  }
`;

const ImgTxt = styled.p`
  font-size: 12px;
  margin-bottom: 18px;
  color: #767676;
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

  &.imgerr {
    margin-top: -20px;
  }
`;
