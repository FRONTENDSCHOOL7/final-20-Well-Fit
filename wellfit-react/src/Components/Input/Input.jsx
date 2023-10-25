import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin: 16px 0;
`;

const StyledLabel = styled.label`
  font-size: 12px;
`;

const StyledInput = styled.input`
  height: 32px;
  border: 0;
  border-bottom: 1px solid #dbdbdb;

  &:focus {
    border-bottom: 1px solid #004aad;
  }
`;

export default function Input() {
  return (
    <StyledContainer>
      <StyledLabel htmlFor="user-email">이메일</StyledLabel>
      <StyledInput id="user-email" type="email" placeholder="" />
    </StyledContainer>
  );
}
