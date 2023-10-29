import React from 'react';
import { styled } from 'styled-components';
import searchIcon from '../../images/icon-search.svg';
import { useNavigate } from 'react-router-dom';

const StyledHomeHeader = styled.header`
  font-size: 18px;
  font-weight: bold;
  padding: 13px 16px 13px 16px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;

  & .btn-search {
    width: 24px;
    height: 24px;
  }
`;

export default function HomeHeader() {
  const navigate = useNavigate();
  const gosearch = () => {
    navigate('/home/search');
  };
  return (
    <>
      <StyledHomeHeader>
        <p className="home-title">감귤마켓 피드</p>
        <button className="btn-search" type="button" onClick={gosearch}>
          <img src={searchIcon} alt="검색" />
        </button>
      </StyledHomeHeader>
    </>
  );
}
