import React from 'react';
import { styled } from 'styled-components';
import gobackIcon from '../../../images/icon-arrow-left.svg';
import modrVerticalIcon from '../../../images/icon- more-vertical.svg';
import { useNavigate } from 'react-router-dom';

const StyledChattingUserListHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;

  & .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    padding: 13px 12px 13px 16px;
  }
  & .search-bar .btn-goback {
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  & .search-bar .btn-toggle {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;

export default function ChattingUserListHeader({ isModal, onModalClick }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <StyledChattingUserListHeader>
      <div className="search-bar">
        <button type="button" className="btn-goback" onClick={goback}>
          <img src={gobackIcon} alt="뒤로가기버튼" />
          <span className="a11y-hidden">뒤로가기</span>
        </button>
        <button type="button" className="btn-toggle" onClick={onModalClick}>
          <img src={modrVerticalIcon} alt="토글" />
          <span className="a11y-hidden">토글</span>
        </button>
      </div>
    </StyledChattingUserListHeader>
  );
}
