import React from 'react';
import { styled } from 'styled-components';

const StyledChatRoomFooter = styled.div`
  .div-chatFooter {
    z-index: 0;
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 61px;
    bottom: 0px;
    position: sticky;
  }

  .btn-addImg {
    margin: 13px 18px 12px 16px;
    width: 36px;
    height: 36px;
    background-color: #004aad;
    border-radius: 50%;
  }

  .btn-addImg img {
    margin: 7px;
    width: 22px;
    height: 22px;
  }

  .textarea-message {
    border: none;
    height: 18px;
    padding: auto;
    width: 250px;
    margin-right: 20px;
  }
  .textarea-message::placeholder {
    color: #c4c4c4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn-submit {
    color: #c4c4c4;
  }

  .div-modal {
    position: fixed;
    bottom: 0;
    width: 390px;
    height: 92px;
  }
`;

export default function ChatRoomFooter() {
  return (
    <>
      <StyledChatRoomFooter>
        <div class="div-chatFooter">
          <button type="button" class="btn-addImg">
            <img src="../images/icon-image.svg" alt="파일 첨부" />
          </button>
          <textarea
            class="textarea-message"
            placeholder="메시지 입력하기"
          ></textarea>
          <button type="submit" class="btn-submit">
            전송
          </button>
        </div>

        {/* <!--모달 css 아직 없음--> */}
        <div class="div-modal a11y-hidden">
          <ul>
            <li>채팅방 나가기</li>
          </ul>
        </div>
      </StyledChatRoomFooter>
    </>
  );
}
