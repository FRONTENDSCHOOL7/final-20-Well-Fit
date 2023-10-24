import React from 'react';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileUsers from '../../Components/Profile/ProfileUsers';
import GoodList from '../../Components/Profile/GoodList';
import ListOn from '../../Components/Profile/ListOn';
import AlbumOn from '../../Components/Profile/AlbumOn';
import ListFeed from '../../Components/Profile/ListFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
import ModalLogout from '../../Components/common/Modal/ModalLogout';
export default function PageUsersProfile() {
  return (
    <>
      <MainHeader />
      <ProfileUsers />
      <GoodList />
      {/* <ListOn /> */}
      <AlbumOn />
      <ListFeed />
      {/* <AlbumFeed /> */}
      {/* <ModalUserList /> */}
      {/* <ModalLogout /> */}
    </>
  );
}
