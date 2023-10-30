import React from 'react';
import { styled } from 'styled-components';
import logoGray from '../../images/logo-gray.svg';
import { useNavigate } from 'react-router-dom';

const StyledHomeNonFeed = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50%;
  }

  & section img {
    width: 200px;
    height: 150px;
  }
  & section p {
    color: #767676;
    margin: 20px 0;
  }
  & section .btn-lg-search {
    width: 120px;
    height: 44px;
    background-color: #515fec;
    border-radius: 44px;
    color: #fff;
  }
`;

export default function HomeNonFeed() {
  const navigate = useNavigate();
  const gosearch = () => {
    navigate('./search');
  };
  return (
    <StyledHomeNonFeed>
      <h2 className="a11y-hidden">게시물없음, 유저 검색 버튼</h2>
      <section>
        <img src={logoGray} alt="스플레시 이미지" />
        <p>유저를 검색해 팔로우 해보세요!</p>
        <button type="button" className="btn-lg-search" onClick={gosearch}>
          검색하기
        </button>
      </section>
    </StyledHomeNonFeed>
  );
}
