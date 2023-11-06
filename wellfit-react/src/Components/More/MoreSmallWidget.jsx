import React from 'react';
import styled from 'styled-components';

const StyledSmallWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;

  & .small-widget img {
    width: 40px;
    height: 40px;
  }
`;
export default function MoreSmallWidget({ src, alt, text }) {
  return (
    <StyledSmallWidget>
      <p>{text}</p>
      <a href="">
        <img src={src} alt={alt} />
      </a>
    </StyledSmallWidget>
  );
}
