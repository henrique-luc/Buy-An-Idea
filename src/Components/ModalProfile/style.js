import styled from "styled-components";
import styledMUI from "@emotion/styled";
import { Box } from "@mui/material";
import { DivEndereco } from "../../Pages/Register/style";

export const DivAddress = styled.div`
  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
      margin-top: 1rem;
      margin-left: 1rem;
      font-weight: 500;
      color: var(--gray-3);
    }
  }
`;

export const InputAddress = styled(DivEndereco)`
  width: 96%;
  margin: 0 auto;
  border: 2px solid var(--color-secundary);
  border-radius: 10px;

  input {
    background-color: transparent;
    font-family: "Open Sans", sans-serif;
  }
`;

export const HeaderModal = styled.div`
  max-width: 768px;
`;

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

export const ButtonCloseModal = styled.button`
  position: fixed;
  left: 85%;
  top: 60px;
  background: transparent;
  border: 0;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const InputDiv = styled.div`
  p {
    font-size: 16px;
  }

  select {
    max-height: 45px;
    font-family: "Open Sans", sans-serif;
  }

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

  :hover {
    background-color: var(--gray-2);
  }
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 95%;
  }

  input {
    height: 45px;
    font-family: "Open Sans", sans-serif;
  }

  p {
    font-size: 16px;
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
  width: 85vw;
  background-color: #FAFAFA;
  border-radius: 24px;
  padding: 3rem;
  max-width: 768px;

  @media (min-width: 768px) {
  }
`;
