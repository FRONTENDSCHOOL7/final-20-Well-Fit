import React from 'react';
import styled from 'styled-components';

export default function AccountButton({
  type,
  text,
  disabled = false,
  onClick,
}) {
  return (
    <StyledAccountButton type={type} disabled={disabled} onClick={onClick}>
      {text}
    </StyledAccountButton>
  );
}

const StyledAccountButton = styled.button`
  color: #fff;
  width: 322px;
  height: 44px;
  padding: 13px 0;
  border-radius: 44px;
  font-size: 14px;
  background-color: #004aad;

  &:disabled {
    background-color: #97b2de;
  }
`;
