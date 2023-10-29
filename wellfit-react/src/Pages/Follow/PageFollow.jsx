import React from 'react';
import { styled } from 'styled-components';
import FollowContent from '../../Components/Follow/FollowContent';
import FollowHeader from '../../Components/Follow/FollowHeader';
import Footer from '../../Components/common/Footer/Footer';

const StyledFollowPage = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  background-color: #fff;

  /* 화면 넘치면 숨김 */
  overflow: hidden;
`;

export default function PageFollow() {
  return (
    <>
      <StyledFollowPage>
        <FollowHeader />
        <FollowContent />
      </StyledFollowPage>
      <Footer />
    </>
  );
}
