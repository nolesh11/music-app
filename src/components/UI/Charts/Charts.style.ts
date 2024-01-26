import styled from "styled-components";

export const StyledCharts = styled.div`
  padding: 32px;
  transition: ease-in-out 0.3s;

  .chartsHeader {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: calc(3.6vw + 2px);
      color: ${(props) => props.theme.colors.black};
    }

    .dropdown {
      position: relative;

      .chartsOption {
        padding: calc(0.5vw + 2px) calc(0.6vw + 3px);
        border: 2px solid;

        .firstBlockText {
          p {
            font-size: calc(0.7vw + 5px);
          }
        }

        .chartsBtn {
          margin-left: 16px;
          cursor: pointer;

          svg {
            width: calc(0.5vw + 6px);
          }
        }
      }
    }
  }

  .open {
    display: block;
  }

  .close {
    display: none;
  }

  .chartDropdown {
    display: none;
  }

  .chartDropdown.active {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    align-self: center;
    border: 2px solid;
    border-top: 0;
    position: absolute;
    background-color: #f6f6f6;

    .typeOption {
      flex: 1;

      p {
        border: 0.5px solid ${(props) => props.theme.colors.lightGray};
        cursor: pointer;
        font-size: calc(0.7vw + 5px);
        padding: calc(0.5vw + 2px) calc(0.6vw + 3px);
      }
    }

    .typeOption p:first-child {
      font-weight: 600;
    }
  }

  .chartList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 32px;

    .chartsElems {
      display: grid;
      grid-template-columns: 40px 0.15fr 1fr 1fr 0.2fr;
      gap: 10px;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;

      .chartNum {
        font-size: calc(0.5vw + 14px);
        font-weight: bold;
      }

      .chartImg {
        width: 60px;
      }

      .chartTitle {
        font-size: calc(0.5vw + 14px);
        font-weight: 600;
      }

      .chartArtist {
        font-size: calc(0.5vw + 14px);
      }
    }
  }
`;
