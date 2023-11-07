import React from 'react';
import { styled } from 'styled-components';
import Loading from '../common/Loading/Loading';
import PostCommentItem from './PostCommentItem';

const StyledPostCommentList = styled.section`
  padding: 20px 16px;
  height: 235px;
  border-bottom: 2px solid #dbdbdb;
  overflow-y: scroll;

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
`;

export default function PostCommentList({ commentList, modalHandler }) {
  if (!commentList) {
    return <Loading />;
  }
  return (
    <StyledPostCommentList>
      <ol>
        {commentList.map((comment) => {
          return (
            <PostCommentItem
              comment={comment}
              key={comment.id}
              modalHandler={modalHandler}
            />
          );
        })}
      </ol>
    </StyledPostCommentList>
  );
}
