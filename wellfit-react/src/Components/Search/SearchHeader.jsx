import React from 'react';
import { styled } from 'styled-components';
import gobackIcon from '../../images/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

const StyledSearchPageHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;

  & .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 8px 16px;
  }
  & .search-bar .btn-goback {
    width: 22px;
    height: 22px;
    background-image: url('../../../images/icon-arrow-left.svg');
  }
  & .search-bar input {
    flex: 1;
    padding: 7px 0 7px 16px;
    border-radius: 32px;
    background-color: #f2f2f2;
    border: none;
  }
`;

export default function SearchHeader({ setKeyword }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <StyledSearchPageHeader>
      <div className="search-bar">
        <button type="button" className="btn-goback" onClick={goback}>
          <img src={gobackIcon} alt="뒤로가기" />
        </button>
        <label htmlFor="input-search" className="a11y-hidden">
          계정 검색
        </label>
        <input
          type="text"
          id="input-search"
          placeholder="계정 검색"
          onChange={handleKeyword}
        />
      </div>
    </StyledSearchPageHeader>
  );
}
