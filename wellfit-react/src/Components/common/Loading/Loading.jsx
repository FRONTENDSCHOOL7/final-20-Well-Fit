import React from 'react';
import spinner from '../../../images/Spinner-1s-200px.svg';
import { styled } from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  /* 부모는 position: relative */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Loading() {
  return (
    <StyledSpinnerWrapper className="loading-wrapper">
      <img src={spinner} alt="로딩중" />
    </StyledSpinnerWrapper>
  );
}
