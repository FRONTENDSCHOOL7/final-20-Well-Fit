import { React, useState } from 'react';
import { styled } from 'styled-components';
import ChattingUserListContent from '../../Components/Chatting/ChattingUserListContent';
import ChattingUserListHeader from '../../Components/Chatting/ChattingUserListHeader';
import Footer from '../../Components/common/Footer/Footer';
import ModalUserList from '../../Components/common/Modal/ModalUserList';

const StyledChattingListPage = styled.div`
  width: 390px;
  height: 732px;
  margin: 0 auto;
  font-size: 14px;
  background-color: #fff;

  /* 화면 넘치면 숨김 */
  overflow: hidden;
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

export default function PageChattingList() {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <ChattingUserListHeader
        isModal={isModal}
        onModalClick={handleModalClick}
      />
      <StyledChattingListPage>
        <ChattingUserListContent />
      </StyledChattingListPage>
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
