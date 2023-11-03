import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import ModalDeleteComment from '../../Components/common/Modal/ModalDeleteComment';
import PostContent from '../../Components/Post/PostContent';
import PostHeader from '../../Components/Post/PostHeader';
import { useParams } from 'react-router-dom';
import { getFollowedPostDetail } from '../../api/GETFollowedPostDetail';
const StyledPostPage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;

  /* 화면 넘치면 숨김 */
  background-color: #fff;
  overflow: hidden;

  position: relative;
`;
const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function PagePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPostDetail, setCurrentPostDetail] = useState({});
  const params = useParams();
  console.log(params);

  const modalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const getPostDetail = async () => {
      const postDetail = await getFollowedPostDetail(params.postid);
      setCurrentPostDetail(postDetail.post);
    };
    getPostDetail();
  }, [params]);

  useEffect(() => {
    console.log('현재 게시물 상세정보');
    console.log(currentPostDetail);
  }, [currentPostDetail]);

  return (
    <>
      <StyledPostPage>
        <PostHeader />
        <PostContent
          modalHandler={modalHandler}
          currentPostDetail={currentPostDetail}
        />
        {isModalOpen ? <ModalDeleteComment /> : null}
      </StyledPostPage>
      {isModalOpen ? (
        <StyledModalBackground onClick={modalHandler}></StyledModalBackground>
      ) : null}
    </>
  );
}
