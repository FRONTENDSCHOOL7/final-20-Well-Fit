import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import feedImage from './images/unsplash_FWtiv70Z_ZY.png';
import heartFill from '../../images/icon-heart-fill.svg';
import profileImage from '../../images/basic-profile-small.svg';
import heartEmpty from '../../images/icon-heart.svg';
import commentCircle from '../../images/icon-message-circle.svg';
import { useNavigate } from 'react-router-dom';

const StyledHomeFeed = styled.li`
  display: flex;
  gap: 12px;
  padding: 20px 16px 0;

  /* & + li {
    margin-top: 24px;
  } */
  & .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }

  & .feed {
    font-size: 14px;
    width: 304px;
  }
  & .feed .feed-header {
    margin-bottom: 16px;

    /* 프로필이미지 옆에있는 텍스트를 내리기 위해 적용 */
    margin-top: 8px;
  }

  & .feed .feed-content > p {
    overflow-wrap: break-word;
  }

  & .feed .feed-header .feed-writer {
    font-size: 12px;
    color: #767676;
  }

  & .feed .feed-content img {
    margin-top: 16px;
    border-radius: 10px;
    box-sizing: border-box;
    object-fit: cover;
    width: 304px;
    height: 228px;
    cursor: pointer;
  }
  /* 좋아요 버튼, 메세지 버튼 스타일 시작 */
  & .feed .feed-info button {
    width: 20px;
    height: 20px;
  }

  & .feed .feed-info .hearts .btn-hearts-fill {
    background-image: url('/images/icon-heart.svg');
  }
  & .feed .feed-info .comments .btn-comments {
    background-image: url('./images/icon-message-circle.svg');
  }
  & .feed .feed-info .icons {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 12px 0 16px;
  }
  & .feed .feed-info .icons .hearts,
  .feed .feed-info .icons .comments {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  & .feed .feed-info time {
    font-size: 10px;
    color: #767676;
  }
  & .feed .feed-info time span:not(:last-child) {
    margin-right: 2px;
  }

  /* 좋아요 버튼, 메세지 버튼 스타일 끝 */
`;

export default function HomeFeed({ post }) {
  const SERVER_STANDARD_IMG_URL = 'http://146.56.183.55:5050/Ellipse.png';
  const SERVER_IMG_UPLOAD_URL = 'https://api.mandarin.weniv.co.kr/';
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const navigate = useNavigate();

  const handleMovingProfile = (accountname) => {
    return () => {
      const loggedInUser = JSON.parse(
        localStorage.getItem('userInfo')
      ).accountname;
      if (accountname === loggedInUser) {
        navigate(`/myprofile`);
      } else {
        navigate(`/userProfile/${accountname}`);
      }
    };
  };

  const gopost = () => {
    navigate(`./post/${post.author.accountname}/${post.id}`);
  };

  const onClickHeartHandler = () => {
    setIsHeartClick((prevState) => !prevState);
  };

  // 서버 기본이미지인지 확인
  const checkAuthorImg = (authorImage) => {
    if (authorImage === SERVER_STANDARD_IMG_URL) {
      return profileImage;
    } else {
      return authorImage;
    }
  };

  // 파일 업로드 시 이미지 없으면 서버주소/null
  // 파일 업로드 시 이미지 있으면 서부주소/이미지이름.확장자
  const checkPostImgUrl = (postImgUrl) => {
    return !postImgUrl ? false : true;
  };

  const postImgList = (postImg) => {
    return post.image.split(',');
  };

  // feed 날짜 정보
  const feedUpdatedAtDate = {
    updateyear: new Date(post.updatedAt).getFullYear(),
    updatemonth: new Date(post.updatedAt).getMonth() + 1,
    updateday: new Date(post.updatedAt).getDate(),
  };
  const feedCreatedAtDate = {
    createyear: new Date(post.createdAt).getFullYear(),
    createmonth: new Date(post.createdAt).getMonth() + 1,
    createday: new Date(post.createdAt).getDate(),
  };

  useEffect(() => {
    setHeartCount((prevState) =>
      isHeartClick ? prevState + 1 : prevState - 1
    );
  }, [isHeartClick]);

  useEffect(() => {
    setHeartCount(0);
  }, []);

  return (
    <StyledHomeFeed>
      <h3 className="a11y-hidden">펄로우한 계정 게시물</h3>
      <div className="img-profile">
        <img
          src={checkAuthorImg(post.author.image)}
          alt="프로필 사진"
          onClick={handleMovingProfile(post.author.accountname)}
        />
      </div>
      <section className="feed">
        <div className="feed-header">
          <p className="feed-title">{post.author.username}</p>
          <p className="feed-writer">&#64;{post.author.accountname}</p>
        </div>
        <div className="feed-content">
          <p>{post.content}</p>
          {/* 조건부 렌더링 : 이미지 데이터가 있을경우에 렌더링*/}
          {checkPostImgUrl(post.image) &&
            postImgList(post.image).map((img, idx) => {
              return (
                <div className="feed-img-wrapper" key={idx}>
                  <img
                    src={SERVER_IMG_UPLOAD_URL + img}
                    alt="피드 사진"
                    onClick={gopost}
                  />
                </div>
              );
            })}
        </div>
        <div className="feed-info">
          <div className="icons">
            <div className="hearts">
              <button className="btn-hearts" onClick={onClickHeartHandler}>
                {isHeartClick ? (
                  <img src={heartFill} alt="좋아요" />
                ) : (
                  <img src={heartEmpty} alt="좋아요" />
                )}
                <span className="a11y-hidden">좋아요 버튼</span>
              </button>
              <span>{heartCount}</span>
            </div>
            <div className="comments">
              <button className="btn-comments" onClick={gopost}>
                <img src={commentCircle} alt="댓글" />
                <span className="a11y-hidden">댓글목록 보기</span>
              </button>
              <span>{post.commentCount}</span>
            </div>
          </div>
          <time dateTime="2020-10-21">
            <span>{feedCreatedAtDate.createyear}년</span>
            <span>{feedCreatedAtDate.createmonth}년</span>
            <span>{feedCreatedAtDate.createday}년</span>
          </time>
        </div>
      </section>
    </StyledHomeFeed>
  );
}
