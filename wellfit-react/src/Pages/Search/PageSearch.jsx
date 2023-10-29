import React from 'react';
import { styled } from 'styled-components';
import SearchContent from '../../Components/Search/SearchContent';
import SearchHeader from '../../Components/Search/SearchHeader';
import Footer from '../../Components/common/Footer/Footer';

const StyledSearchPage = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;

  overflow: hidden;
  background-color: #fff;
`;

export default function PageSearch() {
  return (
    <>
      <StyledSearchPage>
        <SearchHeader />
        <SearchContent />
      </StyledSearchPage>
      <Footer />
    </>
  );
}
