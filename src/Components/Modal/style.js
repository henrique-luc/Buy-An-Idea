import styled from "styled-components";
import styledMUI from "@emotion/styled";
import { Box } from "@mui/material";

export const ModalTitle = styled.h1`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: var(--color-secundary);
`;

export const ModalSubtitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--gray-3);
  margin-bottom: 1rem;
`;

// export const ButtonClose = styled.button`
//   position: relative;
//   left: 63vw;
//   bottom: 100px;
//   width: 32px;
//   height: 32px;
//   font-size: 24px;
//   font-family: "Open Sans", sans-serif;
//   font-weight: 500;
//   color: var(--gray-3);
//   background: transparent;
//   border: 0;

//   @media (min-width: 768px) {
//     left: 75vw;
//   }

//   @media (max-width: 768px) {
//     left: 75vw;
//   }
// `;

export const InputDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonEdit = styled.button`
  width: 70%;
  height: 45px;
  background-color: var(--color-secundary);
  border: 0;
  color: #fff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-top: 2rem;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 95%;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--gray-3);
  }

  @media (min-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;

    label {
      margin: 1rem;
      width: 35vw;
      max-width: 320px;
    }
  }
`;

export const BoxEdit = styledMUI(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  background-color: var(--gray-0);
  border-radius: 24px;
  padding: 3rem;
  max-width: 768px;

  @media (min-width: 768px) {
  }
`;
