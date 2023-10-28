import React, { useState } from 'react';
import styled from 'styled-components';
import ImgListOff from '../../images/icon-post-list-off.svg';
import ImgAlbumOn from '../../images/icon-post-album-on.svg';
import ImgListOn from '../../images/icon-post-list-on.svg';
import ImgAlbumOff from '../../images/icon-post-album-off.svg';

const StyledListAlbumSwitch = styled.article`
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

export default function AlbumSwitch({ isList, onListClick, onAlbumClick }) {
  return (
    <StyledListAlbumSwitch>
      <section className="turnBtn-wrapper">
        <button type="button" onClick={onListClick}>
          <img src={isList ? ImgListOff : ImgListOn} alt="리스트형" />
        </button>
        <button type="button" onClick={onAlbumClick}>
          <img
            className="btn-album"
            src={isList ? ImgAlbumOn : ImgAlbumOff}
            alt="앨범형"
          />
        </button>
      </section>
    </StyledListAlbumSwitch>
  );
}
