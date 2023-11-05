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
import { getProductList } from '../../api/GETProductList';
import { getMyFeedList } from '../../api/GETMineFeedList';

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
  const [myFeed, setMyFeed] = useState([]);
  const [myProduct, setMyProduct] = useState({});
  const [feedImages, setFeedImages] = useState([]); // 앨범형으로 넘길 이미지 상태 관리

  const myProfileData = async () => {
    try {
      const myData = await getMyInfo();
      setMyInfo(myData.user);
      return myData.user.accountname;
    } catch (error) {
      console.error(error);
    }
  };

  const myProductList = async (accountname) => {
    try {
      const myProductData = await getProductList(accountname);
      if (myProductData) {
        setMyProduct(myProductData);
      } else {
        console.error('No product found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const myFeedData = async () => {
    try {
      const myData = await getMyFeedList();
      setMyFeed(myData.post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myProfileData().then((accountname) => {
      if (accountname) {
        myProductList(accountname);
      }
      myFeedData();
    });
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

  console.log(myProduct.product);
  return (
    <>
      <StyledMainHeader>
        <MainHeader isModal={isModal} onModalClick={handleModalClick} />
      </StyledMainHeader>
      <ProfileMine myInfo={myInfo} />
      {myProduct.data && myProduct.data !== 0 ? (
        <GoodListMine myProduct={myProduct.product} />
      ) : null}
      <ListAlbumSwitch
        isList={isList}
        onListClick={handleListClick}
        onAlbumClick={handleAlbumClick}
      />
      {isList ? (
        <AlbumFeed feedImages={feedImages} />
      ) : (
        <ListMineFeed myFeed={myFeed} setFeedImages={setFeedImages} />
      )}
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
