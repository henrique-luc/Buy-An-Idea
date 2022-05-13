import styled from "styled-components";

export const DivAddidea = styled.div`
  width: 100%;
  height: 100%;

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
    justify-content: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .container_addIdea-header {
      height: 100px;
    }

    .container_addIdea-main {
      display: flex;
    }

    .container_addIdea-main-aside {
      background-color: gray;
      width: 15%;
    }

    form section {
      display: flex;
    }
  }
`;
