import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import heartFill from '../../images/icon-heart-fill.svg';
import profileImage from '../../images/basic-profile-small.svg';
import heartEmpty from '../../images/icon-heart.svg';
import commentCircle from '../../images/icon-message-circle.svg';
import moreIcon from '../../images/s-icon-more-vertical.svg';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading/Loading';

const StyledPostFeed = styled.article`
  display: flex;
  gap: 12px;
  padding: 20px 16px 24px 16px;
  max-height: 405px;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    /* display: none; */ /* 스크롤 바 숨기기 */
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey; /* 스크롤 바 색상 */
    border-radius: 10px; /* 스크롤 바 모서리 둥글게 */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤 바 배경 색상 */
  }
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: darkgrey transparent; /* 스크롤 바 색상, 스크롤 바 배경 색상 */
  & .img-profile img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  & .post-detail-mine-content .feed .img-feed {
    width: 304px;
    height: 228px;
  }
  & .post-detail-mine-content ol li + li {
    margin-top: 24px;
  }

  /* img-profile 시작 */
  & .post-detail-mine-content .img-profile img {
    width: 42px;
    height: 42px;
    background-color: #dbdbdb;
    border-radius: 50%;
  }

  /* img-profile 끝 */

  /* feed 시작 */
  & .feed {
    font-size: 14px;
    width: 310px;
  }
  & .feed .feed-header {
    margin-bottom: 16px;

    /* 프로필이미지 옆에있는 텍스트를 내리기 위해 적용 */
    margin-top: 8px;
    position: relative;
  }
  & .feed .feed-header .btn-post-toggle {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  & .feed .feed-header .feed-writer {
    color: #767676;
  }
  & .feed .feed-content {
    /* background-color: red; */
    width: 100%;
  }
  & .feed .feed-content > p {
    overflow-wrap: break-word;
  }
  & .feed .feed-content img {
    margin-top: 16px;
    border-radius: 10px;
    box-sizing: border-box;
    object-fit: cover;
    width: 304px;
  }

  /* 좋아요 버튼, 메세지 버튼 스타일 시작 */
  & .feed .feed-info button {
    width: 20px;
    height: 20px;
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
  & .feed-info .comments .btn-comments {
    cursor: auto;
  }
  /* 좋아요 버튼, 메세지 버튼 스타일 끝 */

  /* feed 끝 */

  /* post-detail-mine-content 끝 */
`;

export default function PostFeed({ currentPostDetail }) {
  const [isHeartClick, setIsHeartClick] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const SERVER_STANDARD_IMG_URL = 'http://146.56.183.55:5050/Ellipse.png';
  const SERVER_IMG_UPLOAD_URL = 'https://api.mandarin.weniv.co.kr/';
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
    return currentPostDetail.image.split(',');
  };

  useEffect(() => {
    setHeartCount((prevState) =>
      isHeartClick ? prevState + 1 : prevState - 1
    );
  }, [isHeartClick]);

  useEffect(() => {
    console.log(currentPostDetail);
    setHeartCount(0);
  }, []);

  if (!currentPostDetail || Object.keys(currentPostDetail).length === 0) {
    return <Loading />;
  }

  return (
    <StyledPostFeed>
      <h2 className="a11y-hidden">게시물 자세히보기</h2>
      <div className="img-profile">
        <img
          src={checkAuthorImg(currentPostDetail.author.image)}
          alt="프로필 사진"
          onClick={handleMovingProfile(currentPostDetail.author.accountname)}
        />
      </div>
      <section className="feed">
        <div className="feed-header">
          <p className="feed-title">{currentPostDetail.author.username}</p>
          <p className="feed-writer">
            &#64;{currentPostDetail.author.accountname}
          </p>
          <button type="button" className="btn-post-toggle">
            <img src={moreIcon} alt="토글" />
            <span className="a11y-hidden">토글</span>
          </button>
        </div>
        <div className="feed-content">
          <p>{currentPostDetail.content}</p>
          {checkPostImgUrl(currentPostDetail.image) &&
            postImgList(currentPostDetail.image).map((img, idx) => {
              return (
                <div className="feed-img-wrapper" key={idx}>
                  <img
                    className="img-feed"
                    src={SERVER_IMG_UPLOAD_URL + img}
                    alt="피드 사진"
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
              <button className="btn-comments">
                <img src={commentCircle} alt="댓글" />
                <span className="a11y-hidden">댓글목록 보기</span>
              </button>
              <span>{currentPostDetail.commentCount}</span>
            </div>
          </div>
          <time dateTime="2020-10-21">2020년 10월 21일</time>
        </div>
      </section>
    </StyledPostFeed>
  );
}
