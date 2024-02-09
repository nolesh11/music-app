import styled from "styled-components"; 

export const StyledFooter = styled.footer`
  display: flex;
  gap: 80px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 40px calc(12vw - 35px);
  margin: 32px auto 0;

  .mobileCopyright {
    display: none;
  }

  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 20px;

    .footerFirstBlock {
      width: 90vw;
      p {
        font-size: 24px;
      }
    }
    .footerSecondBlock {
      width: 90vw;
      border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      p {
        font-size: 16px;
      }

      p:nth-child(7) {
        margin-bottom: 16px;
      }
    }
    .footerThirdBlock {
      width: 90vw;
      p {
        font-size: 16px;
      }
    }

    .mobileCopyright {
      display: block;
    }

    .copyRight {
      display: none;
    }
  }
`