import React from 'react';
import ChatRoomFooter from '../../Components/Chatting/ChatRoomFooter';
import ChatRoomHeader from '../../Components/Chatting/ChatRoomHeader';
import ChatRoomList from '../../Components/Chatting/ChatRoomList';

export default function Page_Chatting() {
  return (
    <>
      <ChatRoomHeader></ChatRoomHeader>
      <ChatRoomList></ChatRoomList>
      <ChatRoomFooter></ChatRoomFooter>
    </>
  );
}
