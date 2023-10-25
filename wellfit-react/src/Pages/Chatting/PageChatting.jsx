import React from 'react';
import ChatRoomFooter from '../../Components/Chatting/ChatRoomFooter';
import ChatRoomHeader from '../../Components/Chatting/ChatRoomHeader';
import ChatRoomList from '../../Components/Chatting/ChatRoomList';
import ChatRoomModal from '../../Components/Chatting/ChatRoomModal';

export default function Page_Chatting() {
  return (
    <>
      <ChatRoomHeader></ChatRoomHeader>
      <ChatRoomList></ChatRoomList>
      <ChatRoomModal></ChatRoomModal>

      <ChatRoomFooter></ChatRoomFooter>
    </>
  );
}
