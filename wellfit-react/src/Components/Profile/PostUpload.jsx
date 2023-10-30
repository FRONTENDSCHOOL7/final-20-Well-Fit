import React, { Fragment, useState, useEffect } from 'react';
import { styled } from 'styled-components';
import iconImage from '../../images/icon-image.svg';
import bagicProfile from '../../images/basic-profile.svg';
import x from '../../images/x.svg';
import img from '../../images/icon-image.svg';
const StyledUpload = styled.div`
  .div-postingMain {
    position: relative;
    height: 772px;
  }
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
    display: flex;
    top: 174px;
    left: 70px;
  }
  .img-postingImg {
    width: 168px;
    height: 126px;
    border-radius: 10px;
    border: 0.5px;
  }
  .img-postingImg.single {
    width: 304px;
    height: 228px;
  }
  .img-postingImg:first-child {
    margin-left: 70px;
  }

  .btn-imgDelete {
    position: relative;
    top: 6px;
    left: -28px;
    width: 20px;
    height: 20px;
  }

  .label-image {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #004aad;
    border-radius: 100%;
    right: 16px;
    bottom: 20px;
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
  }
  .img-picture {
    width: 21px;
    height: 21px;
  }

  .input-image {
    display: none;
  }
`;
export default function PostUpload({ setActive }) {
  const [message, setMessage] = useState('');
  const [images, setImages] = useState();
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if ((images?.length ?? 0) + files.length > 3) {
      alert('이미지는 최대 3개까지 첨부할 수 있습니다.');
    } else if (images?.length > 0) {
      setImages([...images, ...files]);
    } else {
      setImages(files);
    }
  };
  useEffect(() => {
    console.log(images);
    if (message !== '' || images?.length > 0) setActive(true);
    else setActive(false);
  }, [message, images, setActive]);
  return (
    <StyledUpload>
      <div className="div-posting">
        <img
          className="img-uploadProfile"
          src={bagicProfile}
          alt="프로필 이미지"
        />
        <textarea
          placeholder="게시글 입력하기..."
          className="textarea-post"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="div-postImg">
        {images?.map((image) => (
          <Fragment key={image.name}>
            <img
              className={`img-postingImg ${
                images.length === 1 ? 'single' : ''
              }`}
              src={URL.createObjectURL(image)}
              alt={`image_${image.name}`}
            />
            <button
              className={`btn-imgDelete`}
              type="button"
              onClick={() => setImages(images.filter((n) => n !== image))}
            >
              <img alt={`delete_image_${image.name}`} src={x}></img>
            </button>
          </Fragment>
        ))}
      </div>
      <label htmlFor="input-image" className="label-image"></label>
      <input
        type="file"
        accept="image/*"
        id="input-image"
        className="input-image"
        onChange={handleImageUpload}
        multiple
      ></input>
    </StyledUpload>
  );
}
