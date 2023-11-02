import React, { useState } from 'react';
import ChatRoomFooter from '../../Components/Chatting/ChatRoomFooter';
import ChatRoomHeader from '../../Components/common/Header/ChatRoomHeader';
import ChatRoomList from '../../Components/Chatting/ChatRoomList';
import ChatRoomModal from '../../Components/common/Modal/ChatRoomModal';
import { styled } from 'styled-components';

const StyledChattingPage = styled.div`
  height: 820px;
  overflow: auto;
`;

export default function Page_Chatting() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledChattingPage>
        <ChatRoomHeader open={open} setOpen={setOpen}></ChatRoomHeader>
        <ChatRoomList></ChatRoomList>
        {open && <ChatRoomModal></ChatRoomModal>}

        <ChatRoomFooter></ChatRoomFooter>
      </StyledChattingPage>
    </>
  );
}
