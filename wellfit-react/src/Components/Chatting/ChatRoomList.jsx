import React from 'react';
import { styled } from 'styled-components';

import basicProfile from '../../images/basic-profile.svg';
import sampleImg1 from '../../images/chat-sample-img1.jpg';
import sampleImg2 from '../../images/chat-sample-img2.jpg';
import sampleImg3 from '../../images/chat-sample-img3.jpg';
const StyledChatRoomList = styled.div`
  & .div-chatRoom {
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    min-height: 820px;
  }

  & .div-reception {
    display: flex;
    width: 100%;
    margin-bottom: 9px;
  }
  & .div-sending {
    display: flex;
    width: 100%;
    margin-bottom: 9px;
    justify-content: end;
  }

  & .img-chatProfil {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    margin-right: 12px;
    border-radius: 50%;
  }

  & .div-receptionChat {
    display: flex;
    align-items: flex-end;
  }

  & .span-receptionChat {
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

  & .div-sendingChat {
    display: flex;
    align-items: flex-end;
  }

  & .span-sendingChat {
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

  & .span-date {
    margin: auto;
    margin-top: 65px;
    margin-bottom: 20px;
    font-size: 11px;
  }

  & .span-time {
    margin: 0px 6px 0px 6px;
    color: var(--767676, #767676);
    font-family: Spoqa Han Sans Neo;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .div-chatRoom li {
    margin: 0px 12px 0px 16px;
  }

  & .img-sendingImg {
    flex-shrink: 0;
    width: 240px;
    height: 240px;
    border-radius: 10px;
    object-fit: cover;
  }

  & .div-space {
    height: 61px;
  }
`;

export default function ChatRoomList() {
  return (
    <>
      <StyledChatRoomList>
        <div className="div-chatRoom">
          <span className="span-date">2023년 10월 15일</span>
          <ul>
            <li>
              <div className="div-reception">
                <img src={basicProfile} className="img-chatProfil" />
                <div className="div-receptionChat">
                  <span className="span-receptionChat">
                    오늘 점심에 먹은 메뉴입니다~
                  </span>
                  <span className="span-time">12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div className="div-reception">
                <img src={basicProfile} className="img-chatProfil" />
                <div className="div-receptionChat">
                  <img src={sampleImg1} className="img-sendingImg" />
                  <span className="span-time">12:39</span>
                </div>
              </div>
            </li>
            <li>
              <div className="div-reception">
                <img src={basicProfile} className="img-chatProfil" />
                <div className="div-receptionChat">
                  <img src={sampleImg2} className="img-sendingImg" />
                  <span className="span-time">12:39</span>
                </div>
              </div>
            </li>

            <li>
              <div className="div-sending">
                <div className="div-sendingChat">
                  <span className="span-time">12:40</span>
                  <span className="span-sendingChat">회원님!!</span>
                </div>
              </div>
            </li>

            <li>
              <div className="div-sending">
                <div className="div-sendingChat">
                  <span className="span-time">12:43</span>
                  <span className="span-sendingChat">
                    바디프로필 찍는 날까지 일주일 남았어요 ㅜㅜㅜㅜ
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="div-sending">
                <div className="div-sendingChat">
                  <span className="span-time">12:43</span>
                  <img src={sampleImg3} className="img-sendingImg" />
                </div>
              </div>
            </li>
            <li>
              <div className="div-sending">
                <div className="div-sendingChat">
                  <span className="span-time">12:43</span>
                  <span className="span-sendingChat">
                    오늘 저녁 헬스장에서 먹은만큼 운동합시다
                  </span>
                </div>
              </div>
            </li>
            {/* 채팅 기능 */}
            {/* <li>
              <div className="div-sending">
                <div className="div-sendingChat">
                  <span className="span-time">12:43</span>
                  <span className="span-sendingChat">보낸 메시지</span>
                </div>
              </div>
            </li> */}
          </ul>
          <div className="div-space"></div>
        </div>
      </StyledChatRoomList>
    </>
  );
}
