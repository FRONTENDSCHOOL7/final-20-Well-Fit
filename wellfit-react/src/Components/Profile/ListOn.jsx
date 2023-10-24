import React from 'react';
import styled from 'styled-components';

const StyledListOn = styled.article`
  display: flex;
  background-color: #fff;
  border-bottom: 0.5px solid #dbdbdb;
  margin-top: 6px;
  & .turnBtn-wrapper {
    margin-left: auto;
    padding-top: 8px;
    padding-right: 13px;
    padding-bottom: 7px;
  }
  & .btn-list {
    padding-right: 5px;
  }
`;
export default function ListOn() {
  return (
    <StyledListOn>
      <section className="turnBtn-wrapper">
        <button type="button">
          <img
            className="btn-list"
            src="../../../../images/icon-post-list-on.svg"
            alt="리스트형-on"
          />
        </button>
        <button type="button">
          <img
            src="../../../../images/icon-post-album-off.svg"
            alt="앨범형-off"
          />
        </button>
      </section>
    </StyledListOn>
  );
}
