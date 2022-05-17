import styled from "styled-components";

export const DivAddidea = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  figcaption {
    display: none;
  }

  .container_addIdea-header {
    height: 60px;
    background-color: black;
  }

  main {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  main h2 {
    margin: 43px 0 0;
    font-family: "Roboto Slab";
    font-weight: 700;
    font-size: 27px;
    background: -webkit-linear-gradient(var(--gradient-green-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  main h4 {
    color: var(--gray-3);
    font-family: "Roboto Slab";
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }

  main p {
    color: var(--gray-3);
    font-size: 34px;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 10px;
  }

  form section {
    margin: 30px 0;
  }

  .container_addIdea-main-form-video {
    display: flex;
    flex-direction: column;
  }

  .container_addIdea-main-form-video video {
    border: 2px solid var(--color-support-2);
    margin-bottom: 10px;
  }

  .container_addIdea-main-form-core-itens {
    display: flex;
    margin-top: 0;
    width: 100%;
  }

  .container_addIdea-main-form-core-itens p {
    height: 50px;
  }

  .container_addIdea-main-form-core-first {
    width: 45%;
    margin-right: 10%;
  }

  .container_addIdea-main-form-core-second {
    width: 45%;
  }

  form section div {
    margin-top: 30px;
  }

  .container_addIdea-main-form-icons {
    display: flex;
    align-items: center;
  }

  .container_addIdea-main-form-icons img {
    width: 20px;
    margin-right: 10px;
  }

  .container_addIdea-main-form-icons small {
    margin-right: 10px;
    width: 50px;
  }

  .container_addIdea-main-form-icons-title h4 {
    width: 150px;
  }

  .container_addIdea-main-form-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container_addIdea-main-form-button h4 {
    color: var(--color-secundary);
  }

  .container_addIdea-main-form-button-textarea {
    border: 2px solid var(--color-secundary);
  }

  .container_addIdea-main-form-button button {
    background: var(--color-secundary);
    border: 0;
    border-radius: 8px;
    color: white;
    font-family: "Inter";
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    padding: 10px 40px;
  }

  @media screen and (min-width: 768px) {
    .container_addIdea-header {
      height: 100px;
    }

    .container_addIdea-main {
      display: flex;
    }

    main h2 {
      font-size: 34px;
    }

    main h4 {
      font-size: 20px;
    }

    main p {
      font-size: 16px;
    }

    .container_addIdea-main-aside {
      background-color: gray;
      width: 15%;
    }

    form section {
      display: flex;
      justify-content: space-between;
    }

    form section div {
      margin-top: 0;
      margin-right: 88px;
      width: 100%;
    }

    .container_addIdea-main-form-video video {
      height: 200px;
    }

    .container_addIdea-main-form-core {
      width: 85%;
    }

    .container_addIdea-main-form-core-itens {
      margin-right: 0;
    }

    .container_addIdea-main-form-core-first {
      width: 50%;
      margin-right: 10%;
    }

    .container_addIdea-main-form-core-second {
      width: 50%;
    }

    .container_addIdea-main-form-button {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
`;
