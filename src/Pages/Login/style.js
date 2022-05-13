import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray-0);

  .container_login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #ffffff;
    height: 100%;
  }

  h2 {
    font-family: "Roboto Slab";
    font-weight: 700;
    font-size: 30px;
    color: var(--color-secundary);
    margin: 50px 0 25px;
  }

  .container_login-checkbox {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-5);
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .container_login-checkbox small {
    margin-left: 8px;
  }

  button {
    background-image: linear-gradient(var(--gradient-green-blue));
    color: var(--gray-6);
    border: none;
    border-radius: 14px;
    width: 100%;
    padding: 10px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .container_login-small {
    color: var(--gray-5);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    .container_login-form {
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
      border-radius: 44px;
      height: fit-content;
      margin: auto;

      form {
        width: 80%;
      }

      @media screen and (max-height: 768px) {
      }
    }
  }
`;
