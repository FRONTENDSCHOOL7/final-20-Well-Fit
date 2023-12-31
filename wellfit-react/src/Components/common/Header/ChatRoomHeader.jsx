import React from 'react';
import { styled } from 'styled-components';

import arrowLeft from '../../../images/icon-arrow-left.svg';
import more from '../../../images/icon-more-vertical.svg';

import { useNavigate } from 'react-router-dom';

const StyledChatRoomHeader = styled.div`
  & .div-uploadHeader {
    font-family: 'SUIT-Regular';
  }

  & .div-uploadHeader {
    top: 0px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    height: 48px;
    border-bottom: 0.5px solid #dbdbdb;
    background-color: white;
    width: 390px;
  }

  & .btn-back {
    width: 22px;
    height: 22px;
    margin-top: 13px;
    margin-left: 16px;
  }

  & .btn-plus {
    width: 24px;
    height: 24px;
    margin: 12px;
  }
`;

export default function ChatRoomHeader({ open, setOpen }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <>
      <StyledChatRoomHeader>
        <div className="div-uploadHeader">
          <button className="btn-back" type="button" onClick={goback}>
            <img src={arrowLeft} alt="뒤로가기 버튼" />
          </button>
          <button
            type="button"
            className="btn-plus"
            onClick={() => setOpen(!open)}
          >
            <img src={more} alt="더보기 버튼" />
          </button>
        </div>
      </StyledChatRoomHeader>
    </>
  );
}
