import React from 'react';
import { styled, keyframes } from 'styled-components';

const modalAnimation = keyframes`
  0% {
    bottom: -10%
  }
  100% {
    bottom: 0;
  }
`;

const StyledChatRoomModal = styled.div`
  & .modal-delete {
    position: absolute;
    top: 712px;
    z-index: 1;
    background-color: #fff;
    width: 390px;
    height: 92px;
    margin: 0 auto;
    padding-top: 16px;
    border-radius: 10px 10px 0 0;
    animation: ${modalAnimation} 1s ease forwards;
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
