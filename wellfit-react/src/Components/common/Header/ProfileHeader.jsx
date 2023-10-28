import React from 'react';
import styled from 'styled-components';
import GoBack from '../../../images/icon-arrow-left.svg';

export default function ProfileHeader({ text, disabled = false, onClick }) {
  return (
    <StyledProfileHeader>
      <Container>
        <BackButton>
          <span className="a11y-hidden">뒤로가기</span>
        </BackButton>
        <SaveButton onClick={onClick} disabled={disabled}>
          {text}
        </SaveButton>
      </Container>
    </StyledProfileHeader>
  );
}

const StyledProfileHeader = styled.header`
  border-bottom: 1px solid #dbdbdb;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 13px 12px 13px 16px;
  background-color: #fefefe;
`;

const BackButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${GoBack});
  vertical-align: middle;
`;

const SaveButton = styled.button`
  color: #fff;
  width: 90px;
  height: 32px;
  padding: 7px 0;
  border-radius: 44px;
  font-size: 14px;
  background-color: #97b2de;
`;
