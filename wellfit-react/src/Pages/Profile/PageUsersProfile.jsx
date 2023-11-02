import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../../Components/common/Header/MainHeader';
import ProfileUsers from '../../Components/Profile/ProfileUsers';
import GoodListUsers from '../../Components/Profile/GoodListUsers';
import ListAlbumSwitch from '../../Components/Profile/ListAlbumSwitch';
import ListUserFeed from '../../Components/Profile/ListUserFeed';
import AlbumFeed from '../../Components/Profile/AlbumFeed';
import ModalUserList from '../../Components/common/Modal/ModalUserList';
import Footer from '../../Components/common/Footer/Footer';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../api/GETUserInfo';
import { getUserPost } from '../../api/GETUserListPost';
import { getProductList } from '../../api/GETProductList';

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
  const [userInfo, setUserInfo] = useState({});
  const [userFeed, setUserFeed] = useState([]);
  const [productList, setProductList] = useState({});
  const { accountname } = useParams();

  const userProfileData = async () => {
    try {
      const userData = await getUserInfo(accountname);
      setUserInfo(userData.profile);
    } catch (error) {
      console.error(error);
    }
  };

  const userFeedData = async () => {
    try {
      const userFeedList = await getUserPost(accountname);
      setUserFeed(userFeedList.post);
    } catch (error) {
      console.error(error);
    }
  };

  const productListData = async () => {
    try {
      const productData = await getProductList(accountname);
      setProductList(productData.product);
    } catch (error) {
      console.error(error);
    }

    console.log(productList);
  };

  useEffect(() => {
    userProfileData();
    userFeedData();
    productListData();
  }, [accountname]);

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
      <ProfileUsers userInfo={userInfo} />
      <GoodListUsers productList={productList} />
      <ListAlbumSwitch
        isList={isList}
        onListClick={handleListClick}
        onAlbumClick={handleAlbumClick}
      />
      {isList ? <AlbumFeed /> : <ListUserFeed userFeed={userFeed} />}
      {isModal && (
        <>
          <StyledOverlay onClick={handleModalClick} />
          <ModalUserList />
        </>
      )}
      <Footer />
    </StyledPage>
  );
}
