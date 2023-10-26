import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import ModalDeleteComment from '../../Components/common/Modal/ModalDeleteComment';
import PostContent from '../../Components/Post/PostContent';
import PostHeader from '../../Components/Post/PostHeader';

const StyledPostPage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  background-color: ${(props) =>
    props.isModalOpen ? 'rgba(100,100,100,.1)' : '#fff'};

  /* 화면 넘치면 숨김 */
  overflow: hidden;

  position: relative;
`;

export default function PagePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);
  return (
    <StyledPostPage isModalOpen={isModalOpen}>
      <PostHeader />
      <PostContent modalHandler={modalHandler} />
      {isModalOpen ? <ModalDeleteComment isModalOpen={isModalOpen} /> : null}
    </StyledPostPage>
  );
}
