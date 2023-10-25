import React from 'react';
import { styled } from 'styled-components';

const StyledHomeHeader = styled.header`
  font-size: 18px;
  font-weight: bold;
  padding: 13px 0 13px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

export default function HomeHeader() {
  return (
    <>
      <StyledHomeHeader>
        <p>감귤마켓 피드</p>
      </StyledHomeHeader>
    </>
  );
}
