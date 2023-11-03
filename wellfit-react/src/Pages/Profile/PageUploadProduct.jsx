import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imageCompression from 'browser-image-compression';
import ProfileHeader from '../../Components/common/Header/ProfileHeader';
import Input from '../../Components/Input/Input';
import AddProduct from '../../images/product-img.svg';
import UploadImage from '../../images/img-button.svg';
import { postAddProduct } from '../../api/PostAddProduct';
import { postUploadImage } from '../../api/PostUploadImage';
import { useNavigate } from 'react-router-dom';
import HomeNonFeed from '../../Components/Home/HomeNonFeed';

export default function PageUploadProduct() {
  const [image, setImage] = useState('');
  const [field, setField] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [imageErrorMsg, setImageErrorMsg] = useState('');
  const [fieldErrorMsg, setFieldErrorMsg] = useState('');
  const [priceErrorMsg, setPriceErrorMsg] = useState('');
  const [urlErrorMsg, setUrlErrorMsg] = useState('');
  const navigate = useNavigate();
  const imgInputRef = useRef();
  const URL = 'https://api.mandarin.weniv.co.kr/';
  const formData = new FormData();
  const blobToFile = (blob, filename) => {
    const file = new File([blob], filename);
    return file;
  };

  // 이미지 업로드
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImageErrorMsg('*이미지를 업로드해 주세요.');
      return;
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 322,
      useWebWorker: true, // 웹 워커 사용 여부
    };
    try {
      const compressedImg = await imageCompression(file, options);
      const compressedFile = blobToFile(compressedImg, file.name);
      formData.append('image', compressedFile);
      const imgData = await postUploadImage(formData);
      setImage(URL + imgData.filename);
    } catch (error) {
      console.log(error);
      setImageErrorMsg('*이미지 업로드에 실패했습니다.');
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
  const handleUploadProduct = async (e) => {
    e.preventDefault();
    const product = {
      itemName: field,
      price: Number(price),
      link: url,
      itemImage: image,
    };
    try {
      await postAddProduct(product);
      navigate('/myprofile');
    } catch (error) {
      console.error(error);
    }
  };

  // 버튼 활성화
  const handleActivateButton = () => {
    return image && field && price && url;
  };

  return (
    <>
      <ProfileHeader
        text="저장"
        disabled={!handleActivateButton()}
        onClick={handleUploadProduct}
      />
      <StyledProfileWrap>
        <Main>
          <Title className="a11y-hidden">상품 등록</Title>
          <Form onSubmit={handleUploadProduct}>
            <ImgContainer>
              <ImgLabel htmlFor="upload-img">
                <ImgTxt>이미지 등록</ImgTxt>
                <Image
                  src={image ? image : AddProduct}
                  alt="기본 상품 이미지"
                />
              </ImgLabel>
              <ImgInput
                id="upload-img"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                ref={imgInputRef}
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

const Image = styled.img`
  border-radius: 10px;
  width: 322px;
  height: 204px;
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

  &.imgerr {
    margin-top: -20px;
  }
`;
