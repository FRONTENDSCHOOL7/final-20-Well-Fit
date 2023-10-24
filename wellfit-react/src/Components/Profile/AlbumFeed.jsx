import React from 'react';
import styled from 'styled-components';
import sample from './images/album_sample.png';

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

export default function AlbumFeed() {
  return (
    <StyledAlbumFeed>
      <img src={sample} alt="피드이미지" />
      <span>
        <img src={sample} alt="피드이미지" />
        <img
          className="many-img"
          src="../../../../images/iccon-img-layers.svg"
          alt="복수 표시"
        />
      </span>
      <img src={sample} alt="피드이미지" />
      <img src={sample} alt="피드이미지" />
      <img src={sample} alt="피드이미지" />
      <span>
        <img src={sample} alt="피드이미지" />
        <img
          className="many-img"
          src="../../../../images/iccon-img-layers.svg"
          alt="복수 표시"
        />
      </span>
      <img src={sample} alt="피드이미지" />
      <img src={sample} alt="피드이미지" />
      <span>
        <img src={sample} alt="피드이미지" />
        <img
          className="many-img"
          src="../../../../images/iccon-img-layers.svg"
          alt="복수 표시"
        />
      </span>
    </StyledAlbumFeed>
  );
}
