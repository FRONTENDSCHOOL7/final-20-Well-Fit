import React from 'react';
import { styled } from 'styled-components';

const StyledUpload = styled.div`
  .div-posting {
    display: flex;
  }
  .img-uploadProfile {
    width: 42px;
    height: 42px;
    margin: 16px;
    margin-right: 13px;
  }
  .textarea-post {
    flex-shrink: 0;
    border: none;
    width: 304px;
    height: 54px;
    margin-top: 31px;
    margin-right: 16px;
    resize: none;
  }

  .div-postImg {
    position: relative;
  }
  .img-postingImg {
    width: 304px;
    height: 228px;
    margin-left: 70px;
    border-radius: 10px;
    border: 0.5px;
  }

  .btn-imgDelete {
    position: absolute;
    top: 6px;
    left: 346px;
    width: 20px;
    height: 20px;
    background-image: url(../../../img/delete2.png);
  }

  .btn-attachPicture {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #004aad;
    border-radius: 100%;
    right: 16px;
    bottom: 20px;
  }
  .img-picture {
    width: 21px;
    height: 21px;
  }
`;
export default function PostUpload() {
  return (
    <StyledUpload>
      <div class="div-posting">
        <img
          class="img-uploadProfile"
          src="./images/basic-profile.svg"
          alt="프로필 이미지"
        />
        <textarea
          placeholder="게시글 입력하기..."
          class="textarea-post"
        ></textarea>
      </div>

      <div class="div-postImg">
        <img
          class="img-postingImg"
          src="./images/sample1.png"
          alt="샘플 이미지"
        />
        <button class="btn-imgDelete" type="button">
          <img src="./images/x.svg"></img>
        </button>
      </div>
      <button class="btn-attachPicture">
        <img
          class="img-picture"
          src="./images/icon-image.svg"
          alt="사진 첨부 버튼"
        />
      </button>
    </StyledUpload>
  );
}
