import styled from "styled-components";

export const StyledCharts = styled.div`

    padding: 32px;
    transition: ease-in-out 0.3s;

    .chartsHeader {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 80px;
        color: ${(props) => props.theme.colors.black};
      }
    }

    .dropdown {
      width: 316px;
      position: relative;
      align-self: center;
    }

    .chartsOption {
      display: flex;
      justify-content: space-between;
      padding: 12px 16px;
      border: 2px solid;

      .chartsBtn {
        cursor: pointer;
      }
    }

    .open {
      display: block;
    }

    .close {
      display: none;
    }

    .chartsListSongs {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 32px;

      .chartsElems {
        display: grid;
        grid-template-columns: 52px 0.15fr 1fr 1fr 0.2fr;
        gap: 10px;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }

      .chartsElems > div:first-child {
        font-weight: bold;
        font-size: 16px;
      }

      .chartNum {
        font-size: 20px;
        font-weight: bold;
      }

      .chartImg {
        width: 60px;
      }

      .chartTitle {
        font-size: 24px;
        font-weight: 600;
      }
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
      }

      h4 {
        font-size: 18px;
        padding: 12px 16px;
        border: 2px solid #ccc;
        border-top: 0;
        border-left: 0;
      }

      .typeOption:last-child h4 {
        border-right: 0;
      }

      .typeOption p {
        cursor: pointer;
        padding: 12px 16px;
        border: 2px solid #ccc;
        border-top: 0;
        border-left: 0;
      }

      .typeOption p.active {
        font-weight: bold;
      }

      .typeOption:nth-child(1) p:nth-child(6) {
        border-left: 0;
        border-bottom: 0;
        padding: 23.3px 32px;
      }
      .typeOption:nth-child(1) p:nth-child(7) {
        border-left: 0;
        border-bottom: 0;
        padding: 25.2px 32px;
      }
      .typeOption:nth-child(2) p:nth-child(6) {
        border-left: 0;
      }
      .typeOption:nth-child(2) p:nth-child(7) {
        border-bottom: 0;
      }

      .typeOption:last-child p {
        border-right: 0;
      }
    }
`