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

  @media screen and (max-width: 768px) {
    height: 20vh;
  }
`;

export const StyledArtistPage = styled.div`
  .container {
    .artistHeader {
      margin-top: -260px;
      position: relative;
      z-index: 1;

    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      .artistHeader {
        display: flex;
        gap: 80px;
      }

    }
  }
  @media screen and (max-width: 768px) {
    .container {
      .artistHeader {
        display: flex;
        gap: 40px;
        margin-top: -120px;
  
        img {
          width: 144px;
          height: 144px;
        }

        .artistHeaderActivity {
          display: flex;
          gap: 20px;
        }
      }

      .artistWorks {
        .artistSongsList {
          display: flex;
          flex-direction: column;
        }
      }

      .arttistAlbums {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .container {
      .artistHeader {
        display: flex;
        gap: 40px;
        margin-top: -120px;
  
        img {
          width: 144px;
          height: 144px;
        }

        .artistHeaderActivity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
        }
      }

      .featured {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;

        .artistInfo {
          width: 90vw;
        }
        .artistWorks {
          width: 90vw;
          .artistSongsList {
            display: flex;
            flex-direction: column;
          }
        }
  
        .arttistAlbums {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

      }

    }
  }

  
`;
