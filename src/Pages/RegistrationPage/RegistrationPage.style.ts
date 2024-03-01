import styled from "styled-components";

export const StyledRegistartonPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(./Dreamscape.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 400px;
    .input-box {
      position: relative;

      .icon {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 16px;
        color: #000;
        margin-left: 2px;
      }
    }

    .remember-forget {
      margin-top: -12px;
      a {
        color: black;
      }
    }

    .register {
      a {
        font-weight: 600;
        margin-left: 4px;
        color: white;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;
