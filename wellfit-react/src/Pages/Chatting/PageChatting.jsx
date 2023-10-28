import React, { useState } from 'react';
import ChatRoomFooter from '../../Components/Chatting/ChatRoomFooter';
import ChatRoomHeader from '../../Components/Chatting/ChatRoomHeader';
import ChatRoomList from '../../Components/Chatting/ChatRoomList';
import ChatRoomModal from '../../Components/Chatting/ChatRoomModal';

export default function Page_Chatting() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ChatRoomHeader open={open} setOpen={setOpen}></ChatRoomHeader>
      <ChatRoomList></ChatRoomList>
      {open && (
        <ChatRoomModal></ChatRoomModal>
      )}

      <ChatRoomFooter></ChatRoomFooter>
    </>
  );
}
