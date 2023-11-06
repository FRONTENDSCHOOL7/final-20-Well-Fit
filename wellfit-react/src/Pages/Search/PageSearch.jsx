import React, { useState } from 'react';
import { styled } from 'styled-components';
import SearchContent from '../../Components/Search/SearchContent';
import SearchHeader from '../../Components/Search/SearchHeader';
import Footer from '../../Components/common/Footer/Footer';
import { useEffect } from 'react';

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
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <>
      <StyledSearchPage>
        <SearchHeader setKeyword={setKeyword} />
        <SearchContent keyword={keyword} />
      </StyledSearchPage>
      <Footer />
    </>
  );
}
