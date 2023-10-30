import React from 'react';
import { styled } from 'styled-components';

const StyledChatRoomModal = styled.div`
  & .modal-delete {
    position: fixed;
    z-index: 1;
    background-color: #fff;
    width: 390px;
    margin: 0 auto;
    padding-top: 16px;
    border-radius: 10px 10px 0 0;
    top: 755px;
  }

  & .modal-line {
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    margin: 0 auto 16px;
    border-radius: 5px;
  }

  & .btn-exit {
    padding: 14px 0 14px 26px;
    text-align: left;
    width: 100%;
  }
`;

export default function ChatRoomModal() {
  return (
    <>
      <StyledChatRoomModal>
        <div class="modal-delete">
          <div class="modal-line"></div>
          <div class="wrapper-btn">
            <button type="button" class="btn-exit">
              채팅방 나가기
            </button>
          </div>
        </div>
      </StyledChatRoomModal>
    </>
  );
}