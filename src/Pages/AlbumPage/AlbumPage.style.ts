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
    height: 60vh;
  }
`;

export const StyledAlbumPage = styled.div`
  display: flex;
  flex-direction: column;

  .albumInfo {
    margin-top: -300px;
    position: relative;
    z-index: 1;

    img {
      width: 280px;
      height: 280px;
    }

    .albumDescription {
      width: 20vw;
      margin-top: 20px;
      color: white;

      p:first-child {
        font-size: 16px;
        color: ${(props) => props.theme.colors.yellow};
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      h2 {
        font-size: 36px;
        text-transform: uppercase;
      }
      h3 {
        font-size: 24px;
        margin-bottom: 4px;
      }
      p:last-child {
        font-size: 16px;
        color: gray;
      }
    }

    .chartViewContainer {
      svg {
        width: 28px;
        height: 28px;
      }
      span {
        color: ${(props) => props.theme.colors.gray};
      }
    }

    .albumInfoBtn {
      svg {
        width: 40px;
        height: 40px;
      }

      svg:hover {
        fill: ${(props) => props.theme.colors.yellow};
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .albumTracks, .albumDetails, .albumTracksDiscription {
      width: 90vw;
    }
  }
  @media screen and (max-width: 800px) {
    .chartViewContainer {
      display: none;
    }
  }

  @media screen and (max-width: 660px) {
    position: relative;
    .albumInfo {
      /* margin: -550px auto 0; */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: -240px;
      left: 92px;

      img {
        width: 320px;
        height: 320px;
      }

      .albumDescription {
        align-self: flex-start;
        width: 100%;
        /* padding-left: 90px; */
      }

      .chartViewContainer {
        display: none;
      }

      .albumInfoBtn {
        align-self: flex-start;
        padding-left: 90px;
        svg {
          display: none;
        }
        &:before {
          content: "Add to favorite";
          color: ${(props) => props.theme.colors.gray};
        }
      }
    }
  }

  .albumList {
    margin-top: 50px;

    .albumTracks {
      .albumTracksInfo {
        .albumTracksViews {
          svg {
            width: 20px;
            height: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 660px) {
    .albumList {
      flex-wrap: wrap;
    }
  }
`;
