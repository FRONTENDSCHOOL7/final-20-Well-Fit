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
import Loading from '../../Components/common/Loading/Loading';

const StyledPage = styled.div`
	width: 100%;
	height: 100%;
`;

const Wrap = styled.div`
	height: 732px;
	overflow: auto;
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
	const [feedImages, setFeedImages] = useState([]); // 앨범형으로 넘길 이미지 상태 관리
	const [isLoading, setIsLoading] = useState(true);
	const { accountname } = useParams();

	const userProfileData = async () => {
		try {
			const userData = await getUserInfo(accountname);
			setUserInfo(userData.profile);
		} catch (error) {
			console.error(error);
		}
	};
	const productListData = async () => {
		try {
			const productData = await getProductList(accountname);
			setProductList(productData);
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
		setIsLoading(false);
	};

	useEffect(() => {
		userProfileData();
		userFeedData();
		productListData();
		console.log(userInfo);
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
	if (isLoading) {
		return <Loading />;
	}
	return (
		<StyledPage>
			<MainHeader isModal={isModal} onModalClick={handleModalClick} />
			<Wrap>
				<ProfileUsers userInfo={userInfo} />
				{productList.data && productList !== 0 ? (
					<GoodListUsers productList={productList.product} />
				) : null}
				<ListAlbumSwitch
					isList={isList}
					onListClick={handleListClick}
					onAlbumClick={handleAlbumClick}
				/>
				{isList ? (
					<AlbumFeed feedImages={feedImages} />
				) : (
					<ListUserFeed userFeed={userFeed} setFeedImages={setFeedImages} />
				)}
				{isModal && (
					<>
						<StyledOverlay onClick={handleModalClick} />
						<ModalUserList />
					</>
				)}
			</Wrap>
			<Footer />
		</StyledPage>
	);
}
