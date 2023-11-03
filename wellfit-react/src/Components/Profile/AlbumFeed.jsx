import React from 'react';
import styled from 'styled-components';
import sample from './images/album_sample.png';
import ImgMany from '../../images/icon-img-layers.svg';

const StyledAlbumFeed = styled.section`
  display: grid;
  width: 390px;
  height: 358px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  justify-items: center;

  margin: 0 auto;
  padding-bottom: 30px;
  padding-top: 16px;

  background-color: #fff;

  & > span {
    position: relative;
  }
  & .many-img {
    position: absolute;
    right: 0%;
  }
`;

export default function AlbumFeed({ feedImages }) {
  return (
    <StyledAlbumFeed>
      {feedImages.map((image, index) => (
        <img key={index} src={image} alt={`피드 이미지 ${index + 1}`} />
      ))}
    </StyledAlbumFeed>
  );
}
