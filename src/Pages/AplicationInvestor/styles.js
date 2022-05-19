import styled from "styled-components";

export const LoadingPage = styled.div`
  img {
    width: 200px;
    animation: identifier 10s linear infinite;
  }

  @keyframes identifier {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InvestidorContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  .ApoieEstaIdeia {
    width: 305px;
    gap: 10px;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    display: none;
    /* display: ${({ isInInfoCard }) =>
      isInInfoCard === true
        ? "flex"
        : "none"}; --> caso seja decidido implementar de fato esta feature extra */
    margin-bottom: 64px;
  }

  .ApoieEstaIdeia button {
    width: 196px;
    height: 34px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: none;
    gap: 10px;

    background-color: #b2ff9e;
  }

  .ApoieEstaIdeia h6 {
    font-weight: 700;
    font-size: 18px;

    color: #1dd3b0;
  }
`;
