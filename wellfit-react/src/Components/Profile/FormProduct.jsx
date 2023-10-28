import React from 'react';
import { styled } from 'styled-components';
import imgButton from '../../images/img-button.svg';

import arrowLeft from '../../images/icon-arrow-left.svg';
const StyledPostUploadHeader = styled.div`
  * {
    font-family: 'SUIT-Regular';
  }

  .div-uploadHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
    top: 0px;
    position: sticky;
  }

  .btn-back {
    width: 22px;
    height: 22px;
    margin-top: 13px;
    margin-left: 16px;
  }
  .btn-upload {
    width: 90px;
    height: 32px;
    color: #ffffff;
    border-radius: 32px;
    margin-top: 8px;
    margin-right: 16px;

    background-color: ${(props) =>
      props.active === true ? '#004aad' : '#9ec1f1'};
  }
`;
const StyledFormProduct = styled.div`
  * {
    font-family: 'SUIT-Regular';
  }

  .div-uploadHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
    top: 0px;
    position: sticky;
  }

  .btn-back {
    width: 22px;
    height: 22px;
    margin-top: 13px;
    margin-left: 16px;
  }
  .btn-upload {
    width: 90px;
    height: 32px;
    color: #ffffff;
    border-radius: 32px;
    margin-top: 8px;
    margin-right: 16px;
  }

  .btn-upload:disabled {
    background-color: #9ec1f1;
  }

  .btn-upload:enabled {
    background-color: #004aad;
  }

  .div-productPicture {
    position: relative;
  }
  .btn-attachPicture {
    position: absolute;
    width: 36px;
    height: 36px;
    background-color: #c4c4c4;
    border-radius: 100%;
    left: 274px;
    bottom: 42px;
  }

  .label-image {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    left: 274px;
    bottom: 42px;
    background-image: url(${imgButton});
    background-color: #c4c4c4;
    cursor: pointer;
  }
  .input-image {
    display: none;
  }
  .form-addProduct h2 {
    margin-bottom: 18px;
    font-size: 12px;
    line-height: 14px;
  }

  .form-addProduct input {
    border: none;
    border-bottom: 1px solid #dbdbdb;

    padding-top: 9px;
    padding-bottom: 9px;
    margin-bottom: 16px;
  }
  .form-addProduct {
    display: flex;
    flex-direction: column;
    margin: 34px;
    margin-top: 30px;
    color: var(--767676, #767676);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .form-addProduct ::placeholder {
    font-size: 14px;
    line-height: 14px;
    color: var(--DBDBDB, #dbdbdb);
  }
  .img-productAdd {
    width: 322px;
    height: 204px;
    margin-bottom: 30px;
  }
`;

export default function FormProduct() {
  return (
    <>
      <StyledPostUploadHeader>
        <div className="div-uploadHeader">
          <button className="btn-back" type="button">
            <img src={arrowLeft} alt="뒤로가기 버튼" />
          </button>
          <button className="btn-upload" type="submit">
            저장
          </button>
        </div>
      </StyledPostUploadHeader>
      <StyledFormProduct>
        {' '}
        <form class="form-addProduct">
          <h2>이미지 등록</h2>
          <div class="div-productPicture">
            <img class="img-productAdd" src="./images/sample1.png" />

            <label id="input-image" className="label-image"></label>
            <input
              type="file"
              accept="image/*"
              id="input-image"
              className="input-image"
            ></input>
          </div>

          <label for="productName">전문 분야</label>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="2-15자 이내여야 합니다."
          />
          {/* <!-- 숫자만, 최대 숫자 10,000,000 --> */}

          <label for="productPrice">수강료</label>
          <input
            type="number"
            name="productPrice"
            id="productPrice"
            placeholder="1시간당 수강료를 입력해주세요."
          />
          <label for="productURL">판매 링크</label>
          <input
            type="url"
            name="productURL"
            id="productURL"
            placeholder="URL을 입력해주세요."
          />
        </form>
      </StyledFormProduct>
    </>
  );
}
