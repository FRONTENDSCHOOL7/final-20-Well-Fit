import React from 'react';
import { styled } from 'styled-components';
import PostCommentItem from './PostCommentItem';

const StyledPostCommentList = styled.section`
  padding: 20px 16px;
  height: 235px;
  overflow-y: scroll;
`;

export default function PostCommentList({ commentList, modalHandler }) {
  console.log(commentList);
  if (!commentList) {
    return <div>Loading...</div>;
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
