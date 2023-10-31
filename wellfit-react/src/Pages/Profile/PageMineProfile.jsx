import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileMine from '../../Components/Profile/ProfileMine';
import ListAlbumSwitch from '../../Components/Profile/ListAlbumSwitch';
import ListFeed from '../../Components/Profile/ListFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
import GoodListMine from '../../Components/Profile/GoodListMine';
import Footer from '../../Components/common/Footer/Footer';
import axios from 'axios';

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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2Y1NjdjYjJjYjIwNTY2MzkwMWZjOCIsImV4cCI6MTcwMzg0MDMzMywiaWF0IjoxNjk4NjU2MzMzfQ.3OiAqm7A6QqsqH2zdrLcB7PA-GpZnsN1LhIDhbOzN0k';
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr/user/myInfo',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setMyInfo(response.data.user);
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
      {isList ? <AlbumFeed /> : <ListFeed />}
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
