import React from 'react';
import { styled } from 'styled-components';
import SearchUserList from './SearchUserList';

const StyledSearchContent = styled.main`
  padding: 20px 16px;

  overflow: scroll;
  height: 100%;

  position: relative;

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey; /* 스크롤 바 색상 */
    border-radius: 10px; /* 스크롤 바 모서리 둥글게 */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤 바 배경 색상 */
  }
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: darkgrey transparent; /*  스크롤 바 색상, 스크롤 바 배경 색상 */
`;

export default function SearchContent({ keyword }) {
  return (
    <StyledSearchContent>
      <SearchUserList keyword={keyword} />
    </StyledSearchContent>
  );
}
