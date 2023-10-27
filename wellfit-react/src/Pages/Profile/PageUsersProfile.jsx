import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileUsers from '../../Components/Profile/ProfileUsers';
import GoodListUsers from '../../Components/Profile/GoodListUsers';
import ListAlbumSwitch from '../../Components/Profile/ListAlbumSwitch';
import ListFeed from '../../Components/Profile/ListFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalUserList from '../../Components/common/Modal/ModalUserList';

const StyledMainHeader = styled.header`
  background-color: #fff;
`;

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
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

export default function PageUsersProfile() {
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
    <StyledPage>
      <StyledMainHeader>
        <MainHeader isModal={isModal} onModalClick={handleModalClick} />
      </StyledMainHeader>
      <ProfileUsers />
      <GoodListUsers />
      <ListAlbumSwitch
        isList={isList}
        onListClick={handleListClick}
        onAlbumClick={handleAlbumClick}
      />
      {isList ? <AlbumFeed /> : <ListFeed />}
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalUserList />
        </>
      )}
    </StyledPage>
  );
}
