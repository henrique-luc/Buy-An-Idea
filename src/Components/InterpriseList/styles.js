import styled from "styled-components";

export const LoadingPage = styled.div`
  width: 366px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 150px;
    animation: identifier 12s linear infinite;
  }

  @keyframes identifier {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    margin-top: 10px;
    font-weight: 600;
  }

  button {
    width: 200px;
    height: 40px;
    margin-top: 20px;

    border-radius: 8px;
    border: none;

    background-color: var(--color-primary);
    color: #fff;
    font-size: 14px;
    font-weight: 700;

    &:hover {
      background: none;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);

      box-shadow: 0px 2px 20px var(--color-primary);

      transition: 0.6s;
    }
  }
`;

export const InterpriseListContainer = styled.div`
  width: 367px;

  @media (min-width: 767px) {
    width: 600px;
  }

  @media (min-width: 1024px) {
    width: 900px;
  }
`;
