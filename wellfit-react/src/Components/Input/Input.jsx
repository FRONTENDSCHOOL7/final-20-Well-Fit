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
  position: relative;

  &.star::before {
    content: '*';
    color: #eb5757;
    position: absolute;
    left: -2.5%;
    top: -5%;
  }
`;

const StyledInput = styled.input`
  height: 32px;
  border: 0;
  outline: none;
  border-bottom: 1px solid #dbdbdb;

  &:focus {
    border-bottom: 1px solid #004aad;
  }

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;

export default function Input({
  label,
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  className,
}) {
  return (
    <StyledContainer>
      <StyledLabel className={className} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledContainer>
  );
}
