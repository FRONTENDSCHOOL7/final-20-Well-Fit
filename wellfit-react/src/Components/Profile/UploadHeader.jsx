import React, { useState } from 'react';
import { styled } from 'styled-components';

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

function UploadHeader() {
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
    </>
  );
}

export default UploadHeader;
