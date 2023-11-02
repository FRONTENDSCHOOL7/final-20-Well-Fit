import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileMine from '../../Components/Profile/ProfileMine';
import ListAlbumSwitch from '../../Components/Profile/ListAlbumSwitch';
import ListMineFeed from '../../Components/Profile/ListMineFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
import GoodListMine from '../../Components/Profile/GoodListMine';
import Footer from '../../Components/common/Footer/Footer';
import { getMyInfo } from '../../api/PostMyInfo';

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
  const [myInfo, setMyInfo] = useState({});

  const myProfileData = async () => {
    try {
      const myData = await getMyInfo();
      setMyInfo(myData.user);
      console.log(myData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myProfileData();
  }, []);

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
      <ProfileMine myInfo={myInfo} />
      <GoodListMine />
      <ListAlbumSwitch
        isList={isList}
        onListClick={handleListClick}
        onAlbumClick={handleAlbumClick}
      />
      {isList ? <AlbumFeed /> : <ListMineFeed />}
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalUserList isModal={isModal} />
        </>
      )}
      <Footer />
    </>
  );
}
