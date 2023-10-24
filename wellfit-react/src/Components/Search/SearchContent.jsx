import React from 'react';
import { styled } from 'styled-components';
import SearchUserList from './SearchUserList';

const StyledSearchContent = styled.main`
  padding: 20px 16px;

  overflow: scroll;
  height: 100%;
`;

export default function SearchContent() {
  return (
    <StyledSearchContent>
      <SearchUserList />
    </StyledSearchContent>
  );
}
