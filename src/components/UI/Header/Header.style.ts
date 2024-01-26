import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  .headerInput {
    input {
      width: calc(11.5vw - 1px);
      height: calc(2vw + 1px);
      font-size: calc(0.7vw + 1px);
    }
  }
  .burger-menu {
    cursor: pointer;
    display: none;

    .bar {
      width: 25px;
      height: 3px;
      background-color: ${(props) => props.theme.colors.black};
      margin: 4px 0;
      transition: transform 0.3s;
    }
  }

  .burger-menu.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-4px, 6px);
  }

  .burger-menu.active .bar:nth-child(2) {
    opacity: 0;
  }

  .burger-menu.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-4px, -6px);
  }

  .bergerMenuOpened {
    display: none;
    position: fixed;
    top: 48px;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    flex-direction: column;

    .userAuth {
      display: none;
    }
  }

  .bergerMenuOpened.active {
    display: flex;
  }

  .bergerMenuOpened p {
    font-size: calc(2.2vw - 1px);
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    margin: 10px;
    padding-bottom: 8px;
  }

  @media screen and (max-width: 1100px) {
    .burger-menu {
      display: block;
    }
  }

  @media screen and (max-width: 730px) {
    .userAuth.active {
      display: block;
    }
    .userLogin {
      display: none;
    }
  }
`;
