import React from 'react';
import styled from 'styled-components';

const StyledAlbumOn = styled.article`
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
  & .btn-album {
    padding-left: 5px;
  }
`;

export default function AlbumOn() {
  return (
    <StyledAlbumOn>
      <section className="turnBtn-wrapper">
        <button type="button">
          <img
            src="../../../../images/icon-post-list-off.svg"
            alt="리스트형-of"
          />
        </button>
        <button type="button">
          <img
            className="btn-album"
            src="../../../../images/icon-post-album-on.svg"
            alt="앨범형-on"
          />
        </button>
      </section>
    </StyledAlbumOn>
  );
}
