import React from 'react';
import { styled, keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
  }
`;

const StyledChatRoomModal = styled.div`
  & .modal-delete {
    position: absolute;
    top: 736px;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 9999px;
    animation: ${modalAnimation} 0.5s ease forwards;
    background-color: #fff;
    width: 390px;
    height: 92px;
    margin: 0 auto;
    padding-top: 16px;
    border-radius: 10px 10px 0 0;
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
        <div className="modal-delete">
          <div className="modal-line"></div>
          <div className="wrapper-btn">
            <button type="button" className="btn-exit">
              채팅방 나가기
            </button>
          </div>
        </div>
      </StyledChatRoomModal>
    </>
  );
}
