import styled from "styled-components";

interface IImageUrl {
  imageurl: string;
}

export const StyledComponentWithBackgroundImage = styled.div<IImageUrl>`
  width: 100%;
  height: 360px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top calc(-18.8vw + 1px);
  opacity: 0.9;
  filter: blur(2px);
  background-attachment: fixed;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media screen and (max-width: 660px) {
    height: 72vh;
  }
`;

export const StyledSongPage = styled.div`
  .container {
    .songInfo {
      margin-top: -320px;
      position: relative;
      z-index: 1;

      .artistInfo {
        .songDiscription {
          max-width: 576px;
        }
      }
    }

    .songLyrics {
      .songLyricsAndDescription {
        p {
          max-width: 715px;
        }

      }
    }
  } 

  @media screen and (max-width: 1100px) {
    .artistInfo {
      h2 {
        font-size: 28px;
      }
      h3 {
        font-size: 16px;
      }
      p:first-child {
        font-size: 12px;
      }
      span {
        font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 12px;
      }

    }
  }

  @media screen and (max-width: 660px) {
    position: relative;
    .songInfo {
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: -320px;
      left: 40px;

      img {
        width: 320px;
        height: 320px;
      }
    }

    .songLyrics {
      margin-top: -240px;

      .songLyricsAndDescription {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }
  }

  .open {
    display: block;
  }

  .close {
    display: none;
  }
`;
