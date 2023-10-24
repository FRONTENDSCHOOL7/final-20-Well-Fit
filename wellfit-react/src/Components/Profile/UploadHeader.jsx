import React from 'react';
import { styled } from 'styled-components';

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
  }

  .btn-upload:disabled {
    background-color: #9ec1f1;
  }

  .btn-upload:enabled {
    background-color: #004aad;
  }
`;
export default function Page_Profile() {
  return (
    <>
      <StyledPostUploadHeader>
        <div class="div-uploadHeader">
          <button class="btn-back" type="button">
            <img src="./images/icon-arrow-left.svg" alt="뒤로가기 버튼" />
          </button>
          <button class="btn-upload" type="submit">
            저장
          </button>
        </div>
      </StyledPostUploadHeader>
    </>
  );
}
