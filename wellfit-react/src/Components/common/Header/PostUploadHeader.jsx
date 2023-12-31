import React from 'react';
import { styled } from 'styled-components';
import arrowLeft from '../../../images/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

const StyledGoodsUploadPage = styled.div`
  background-color: #fff;
  & .div-uploadHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
    top: 0px;
    position: sticky;
  }

  & .btn-back {
    width: 22px;
    height: 22px;
    margin-top: 13px;
    margin-left: 16px;
  }
  & .btn-upload {
    width: 90px;
    height: 32px;
    color: #ffffff;
    border-radius: 32px;
    margin-top: 8px;
    margin-right: 16px;
    background-color: #004aad;
  }
  & .btn-upload:disabled {
    background-color: #9ec1f1 !important;
  }
`;
export default function UploadHeader({ active, setSubmit }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  return (
    <StyledGoodsUploadPage>
      <div className="div-uploadHeader">
        <button className="btn-back" type="button" onClick={goback}>
          <img src={arrowLeft} alt="뒤로가기 버튼" />
        </button>
        <button className="btn-upload" type="submit" disabled={!active} onClick={() => setSubmit(true)}>
          업로드
        </button>
      </div>
    </StyledGoodsUploadPage>
  );
}
