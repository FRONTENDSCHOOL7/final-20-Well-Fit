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
  /* background-color: ${(props) =>
    props.isModalOpen ? 'rgba(0,0,0,.5)' : '#fff'}; */
  /* filter: ${(props) => (props.isModalOpen ? 'blur(1px)' : 'none')}; */
  /* pointer-events: ${(props) => (props.isModalOpen ? 'none' : 'auto')}; */
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
  const modalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <StyledPostPage isModalOpen={isModalOpen}>
        <PostHeader />
        <PostContent modalHandler={modalHandler} />
        {isModalOpen ? <ModalDeleteComment isModalOpen={isModalOpen} /> : null}
      </StyledPostPage>
      {isModalOpen ? (
        <StyledModalBackground onClick={modalHandler}></StyledModalBackground>
      ) : null}
    </>
  );
}
