import React, { useState } from 'react';
import { styled } from 'styled-components';

import imgButton from '../../images/img-button.svg';

const StyledChatRoomFooter = styled.div`
  & .div-chatFooter {
    z-index: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 61px;
    position: fixed;
    top: 783px;
    width: 390px;
  }

  & .label-image {
    margin: 13px 18px 12px 16px;
    width: 36px;
    height: 36px;
    background-color: #004aad;
    border-radius: 50%;
    background-image: url(${imgButton});
  }

  & .input-image {
    display: none;
  }

  & .textarea-message {
    border: none;
    height: 18px;
    padding: auto;
    width: 250px;
    margin-right: 20px;
  }

  & .textarea-message::placeholder {
    color: #c4c4c4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .btn-submit {
    color: #c4c4c4;
    width: 48px;
    height: 32px;
    border-radius: 8px;
  }

  & .btn-submit:not(:disabled) {
    color: white;
    background-color: #004aad;
  }

  & .div-modal {
    position: fixed;
    bottom: 0;
    width: 390px;
    height: 92px;
  }
`;

export default function ChatRoomFooter() {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState();
  return (
    <>
      <StyledChatRoomFooter>
        <div className="div-chatFooter">
          <label htmlFor="input-image" className="label-image"></label>
          <input
            type="file"
            accept="image/*"
            id="input-image"
            className="input-image"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <textarea
            className="textarea-message"
            placeholder="메시지 입력하기"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="btn-submit"
            disabled={message === '' && !image}
          >
            전송
          </button>
        </div>

        {/* <!--모달 css 아직 없음--> */}
        <div className="div-modal a11y-hidden">
          <ul>
            <li>채팅방 나가기</li>
          </ul>
        </div>
      </StyledChatRoomFooter>
    </>
  );
}
