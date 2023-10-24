import React from 'react';
import { styled } from 'styled-components';
import SearchContent from '../../Components/Search/SearchContent';
import SearchHeader from '../../Components/Search/SearchHeader';

const StyledSearchPage = styled.div`
  width: 390px;
  height: 820px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;

  overflow: hidden;
`;

export default function PageSearch() {
  return (
    <StyledSearchPage>
      <SearchHeader />
      <SearchContent />
    </StyledSearchPage>
  );
}
