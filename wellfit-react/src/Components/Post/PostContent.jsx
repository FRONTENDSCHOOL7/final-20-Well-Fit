import React, { useState } from 'react';
import PostCommentList from './PostCommentList';
import PostFeed from './PostFeed';
import PostFooter from './PostFooter';
import { styled } from 'styled-components';

const StyledHr = styled.hr`
  border: 1px solid #dbdbdb;
  margin: 0;
`;
const initialData = [
  {
    id: 0,
    userName: '웰핏',
    content: '오운완',
    profileImage:
      'https://images.unsplash.com/photo-1697694748470-5d9fc99a1b6a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: new Date(),
  },
  {
    id: 1,
    userName: '한라봉',
    content: '감귤주스',
    profileImage:
      'https://images.unsplash.com/photo-1697556399518-89cb479bfe52?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: new Date(),
  },
];
export default function PostContent() {
  const [commentList, setCommentList] = useState(initialData);
  const addComment = (data) => {
    const copyCommentList = [...commentList];
    const newComment = data;
  };
  return (
    <main>
      <PostFeed />
      <StyledHr />
      <PostCommentList commentList={commentList} />
      <PostFooter addComment={addComment} />
    </main>
  );
}
