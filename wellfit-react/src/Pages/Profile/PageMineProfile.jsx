import React from 'react';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileMine from '../../Components/Profile/ProfileMine';
import GoodList from '../../Components/Profile/GoodList';
import ListOn from '../../Components/Profile/ListOn';
import AlbumOn from '../../Components/Profile/AlbumOn';
import ListFeed from '../../Components/Profile/ListFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalListPost from '../../Components/common/Modal/ModalListPost';
import ModalListGoods from '../../Components/common/Modal/ModalListGoods';
import ModalDeletePost from '../../Components/common/Modal/ModalDeletePost';
import ModalDeleteGoods from '../../Components/common/Modal/ModalDeleteGoods';

export default function PageMineProfile() {
  return (
    <>
      <MainHeader />
      <ProfileMine />
      <GoodList />
      {/* <ListOn /> */}
      <AlbumOn />
      <ListFeed />
      {/* <AlbumFeed /> */}
      {/* <ModalListPost /> */}
      {/* <ModalListGoods /> */}
      {/* <ModalDeletePost /> */}
      {/* <ModalDeleteGoods /> */}
    </>
  );
}
