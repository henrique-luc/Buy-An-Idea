import styled from "styled-components";

export const Container = styled.main`
  width: 80vw;
  display: flex;
  justify-content: center;
  max-width: 1440px;
`;

export const BoxContainer = styled.main`
  width: 80vw;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 768px) {
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    background: -webkit-linear-gradient(var(--gradient-green-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    background-color: transparent;
    border: 0;

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--gray-3);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--gray-2);
  }

  ul {
    margin-top: 30px;

    li {
      font-size: 14px;
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      margin-top: 1rem;
      color: var(--gray-3);

      svg {
        margin-right: 6px;
      }

      p {
        margin-top: 2px;
        font-weight: 500;
        font-size: 14px;
        color: var(--gray-2);
      }
    }
  }

  button {
    width: 50%;
    height: 40px;
    background-color: var(--gray-2);
    border: 0;
    color: #fff;
    border-radius: 8px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 14px;
    margin-top: 5rem;
  }

  @media (min-width: 768px) {
    button {
      width: 30%;
    }
  }
`;
