import React from 'react';
import { styled } from 'styled-components';

import basicProfile from '../../images/basic-profile.svg';
const StyledChatRoomList = styled.div`
  .div-chatRoom {
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
  }

  .div-reception {
    display: flex;
    width: 100%;
    margin-bottom: 9px;
  }
  .div-sending {
    display: flex;
    width: 100%;
    margin-bottom: 9px;
    justify-content: end;
  }

  .img-chatProfil {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    margin-right: 12px;
    border-radius: 50%;
  }

  .div-receptionChat {
    display: flex;
    align-items: flex-end;
  }

  .span-receptionChat {
    max-width: 216px;
    flex-shrink: 0;
    background-color: white;
    border: 1px solid #c4c4c4;
    padding: 12px;
    padding-top: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 0 10px 10px 10px;
  }

  .div-sendingChat {
    display: flex;
    align-items: flex-end;
  }

  .span-sendingChat {
    max-width: 216px;
    flex-shrink: 0;
    color: white;
    background-color: #004aad;
    stroke-width: 1px;
    stroke: #c4c4c4;
    padding: 12px;
    padding-top: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 10px 0px 10px 10px;
  }
  .span-date {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 11px;
  }

  .span-time {
    margin: 0px 6px 0px 6px;
    color: var(--767676, #767676);
    font-family: Spoqa Han Sans Neo;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .div-chatRoom li {
    margin: 0px 12px 0px 16px;
  }

  .img-sendingImg {
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export default function ChatRoomList() {
  return (
    <>
      <StyledChatRoomList>
        <div class="div-chatRoom">
          <span class="span-date">2023년 4월 15일</span>
          <ul>
            <li>
              <div class="div-reception">
                <img src={basicProfile} class="img-chatProfil" />
                <div class="div-receptionChat">
                  <span class="span-receptionChat">
                    옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                    뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고,
                    못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                  </span>
                  <span class="span-time">12:39</span>
                </div>
              </div>
            </li>

            <li>
              <div class="div-reception">
                <img src={basicProfile} class="img-chatProfil" />
                <div class="div-receptionChat">
                  <img src="../../../img/sample1.png" class="img-sendingImg" />
                  <span class="span-time">12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div class="div-sending">
                <div class="div-sendingChat">
                  <span class="span-time">12:43</span>
                  <span class="span-sendingChat"> 네 말씀하세요. </span>
                </div>
              </div>
            </li>
            {/* <!--이미지 파일을 전송할 경우--> */}
            <li>
              <div class="div-sending">
                <div class="div-sendingChat">
                  <span class="span-time">12:39</span>
                  <img src="../../../img/sample3.png" class="img-sendingImg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </StyledChatRoomList>
    </>
  );
}
