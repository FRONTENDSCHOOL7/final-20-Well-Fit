import React, { useEffect } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import profileBasicImage from '../../images/basic-profile-small.svg';
import { postComment } from '../../api/POSTComment';
import { useParams } from 'react-router-dom';
import { getPostCommentList } from '../../api/GETPostCommentList';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  & .form-comment-wrapper {
    padding: 12.5px 16px 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
  }
  & .form-comment-wrapper .input-comment-wrapper {
    flex: 1;
    display: flex;
  }

  & .input-comment-wrapper .input-comment {
    border: none;
    border-radius: 32px;
    padding: 10px;
    flex: 1;
  }

  & .form-comment-wrapper .btn-comment-submit {
    color: #c4c4c4;
  }
  & .form-comment-wrapper .btn-comment-submit.active {
    color: #515fec;
  }
`;

export default function PostFooter({ myProfile, setCommentList }) {
  const [comment, setComment] = useState('');
  const serverStandardImg = 'http://146.56.183.55:5050/Ellipse.png';
  console.log(myProfile);
  const params = useParams();
  console.log(params);

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await postComment(params.postid, comment);
    const updatedCommentList = await getPostCommentList(params.postid);
    setCommentList(updatedCommentList.comments);
    setComment('');
  };

  // 서버 기본이미지인지 확인
  const checkAuthorImg = (authorImage) => {
    if (authorImage === serverStandardImg) {
      return profileBasicImage;
    } else {
      return authorImage;
    }
  };

  if (!myProfile) {
    return <div>Loading...</div>;
  }
  return (
    <StyledFooter>
      <form className="form-comment-wrapper" action="#" onSubmit={onSubmit}>
        <img src={checkAuthorImg(myProfile.user.image)} alt="프로필 사진" />
        <div className="input-comment-wrapper">
          <label htmlFor="input-comment" className="a11y-hidden">
            댓글 입력
          </label>
          <input
            type="text"
            id="input-comment"
            className="input-comment"
            placeholder="댓글 입력하기..."
            value={comment}
            onChange={onChangeCommentHandler}
          />
        </div>
        <button
          className={[
            'btn-comment-submit',
            `${comment.length === 0 ? '' : 'active'}`,
          ].join(' ')}
        >
          게시
        </button>
      </form>
    </StyledFooter>
  );
}
