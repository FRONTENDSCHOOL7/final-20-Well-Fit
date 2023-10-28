import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileMine from '../../Components/Profile/ProfileMine';
import GoodList from '../../Components/Profile/GoodListUsers';
import ListAlbumSwitch from '../../Components/Profile/ListAlbumSwitch';
import ListFeed from '../../Components/Profile/ListFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalListPost from '../../Components/common/Modal/ModalListPost';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
import ModalListGoods from '../../Components/common/Modal/ModalListGoodsMine';
import ModalDeletePost from '../../Components/common/Modal/ModalDeletePost';
import ModalDeleteGoods from '../../Components/common/Modal/ModalDeleteGoods';
import GoodListMine from '../../Components/Profile/GoodListMine';

const StyledMainHeader = styled.header`
  background-color: #fff;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default function PageMineProfile() {
  const [isList, setIsList] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(!isModal);
  };

  const handleListClick = () => {
    setIsList(false);
  };

  const handleAlbumClick = () => {
    setIsList(true);
  };
  return (
    <>
      <StyledMainHeader>
        <MainHeader isModal={isModal} onModalClick={handleModalClick} />
      </StyledMainHeader>
      <ProfileMine />
      <GoodListMine />
      <ListAlbumSwitch
        isList={isList}
        onListClick={handleListClick}
        onAlbumClick={handleAlbumClick}
      />
      {isList ? <AlbumFeed /> : <ListFeed />}
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalUserList isModal={isModal} />
        </>
      )}
    </>
  );
}
