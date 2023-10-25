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

export default function Input({ label, id, type, placeholder }) {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} type={type} placeholder={placeholder} />
    </StyledContainer>
  );
}
