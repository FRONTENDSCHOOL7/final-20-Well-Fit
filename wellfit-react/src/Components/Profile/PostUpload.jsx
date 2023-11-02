import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import iconImage from '../../images/icon-image.svg';
import bagicProfile from '../../images/basic-profile.svg';
import iconX from '../../images/x.svg';
import { uploadImages } from '../../api/PostImage';
import { uploadPost } from '../../api/Posting';
const UploadImg = styled.div`
  position: relative;
  width: 168px;
  height: 126px;
  & :first-child {
    margin-left: 70px;
  }
`;
const StyledUpload = styled.div`
  width: 390px;
  background-color: white;

  overflow: auto;
  & .div-posting {
    display: flex;
  }

  & .img-uploadProfile {
    width: 42px;
    height: 42px;
    margin: 16px;
    margin-right: 13px;
  }

  & .textarea-post {
    flex-shrink: 0;
    border: none;
    width: 304px;
    height: 54px;
    margin-top: 31px;
    margin-right: 16px;
    resize: none;
  }

  & .div-postImg {
    display: flex;
    gap: 8px;
    top: 174px;
    left: 70px;
  }

  & .img-postingImg {
    width: 168px;
    height: 126px;
    border-radius: 10px;
    border: 0.5px;
  }

  & .img-postingImg.single {
    width: 304px;
    height: 228px;
  }

  & .img-postingImg:first-child {
    margin-left: 70px;
  }

  & .btn-imgDelete {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 20px;
    height: 20px;
  }
  // & .label-image {
  //   position: absolute;
  //   width: 50px;
  //   height: 50px;
  //   background-color: #004aad;
  //   border-radius: 100%;
  //   right: 16px;
  //   bottom: 20px;
  //   background-image: url(${iconImage});
  //   background-position: center center;
  //   background-repeat: no-repeat;
  // }

  & .label-image {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #004aad;
    border-radius: 100%;
    right: 16px;
    bottom: 20px;
    background-image: url(${iconImage});
    background-position: center center;
    background-repeat: no-repeat;
  }

  & .img-picture {
    width: 21px;
    height: 21px;
  }

  & .input-image {
    display: none;
  }
`;
export default function PostUpload({ setActive, submit, setSubmit }) {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [images, setImages] = useState();
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    // 원래 3개까지 첨부 가능인데 피드에서 여러 장 볼 수 있는 기능 개발 전까지 일단 1개 제한
    if ((images?.length ?? 0) + files.length > 1) {
      alert('이미지는 최대 1개까지 첨부할 수 있습니다.');
    } else if (images?.length > 0) {
      setImages([...images, ...files]);
    } else {
      setImages(files);
    }
  };
  useEffect(() => {
    if (submit) {
      async function fetchData() {
        const imagesFileName = images
          ? await uploadImages(images).then((data) => {
              if (typeof data === 'object') {
                return data.map((image) => image.filename).join();
              }
              return null;
            })
          : null;
        uploadPost(content, imagesFileName).then((data) => {
          if (data?.post?.id) {
            navigate('/home');
          }
        });
      }
      fetchData();
    }
  }, [submit, images, content, navigate]);
  useEffect(() => {
    if (content !== '' || images?.length > 0) setActive(true);
    else setActive(false);
  }, [content, images, setActive]);
  return (
    <StyledUpload>
      <div className="div-postingMain">
        <div className="div-posting">
          <img
            className="img-uploadProfile"
            src={bagicProfile}
            alt="프로필 이미지"
          />
          <textarea
            placeholder="게시글 입력하기..."
            className="textarea-post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="div-postImg">
          {images?.map((image) => (
            <UploadImg key={image.name}>
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
                <img alt={`delete_image_${image.name}`} src={iconX}></img>
              </button>
            </UploadImg>
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
      </div>
    </StyledUpload>
  );
}
