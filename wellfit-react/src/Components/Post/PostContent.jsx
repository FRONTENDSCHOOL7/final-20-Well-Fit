import React, { useState, useEffect } from 'react';
import PostCommentList from './PostCommentList';
import PostFeed from './PostFeed';
import PostFooter from './PostFooter';
import { styled } from 'styled-components';
import { getPostCommentList } from '../../api/GETPostCommentList';
import { getMyInfo } from '../../api/PostMyInfo';
import { useParams } from 'react-router-dom';

const StyledHr = styled.hr`
  border: 1px solid #dbdbdb;
  margin: 0;
`;

export default function PostContent({ modalHandler, currentPostDetail }) {
  const params = useParams();
  const [commentList, setCommentList] = useState(null);
  const [myProfile, setMyProfile] = useState(null);

  useEffect(() => {
    const getCommentList = async () => {
      const comments = await getPostCommentList(params.postid);
      setCommentList(comments.comments);
    };
    getCommentList();

    const getMyProfile = async () => {
      const profile = await getMyInfo();
      setMyProfile(profile);
    };
    getMyProfile();
  }, []);

  useEffect(() => {
    console.log('게시물 댓글 목록');
    console.log(commentList);
  }, [commentList]);

  useEffect(() => {
    console.log('나의 프로필 정보');
    console.log(myProfile);
  }, [myProfile]);

  return (
    <main>
      <PostFeed currentPostDetail={currentPostDetail} />
      <StyledHr />
      <PostCommentList commentList={commentList} modalHandler={modalHandler} />
      <PostFooter myProfile={myProfile} setCommentList={setCommentList} />
    </main>
  );
}
