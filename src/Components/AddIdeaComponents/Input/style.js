import styled from "styled-components";

export const InputContainer = styled.input`
  border: 2px solid var(--color-support-2);
  border-radius: 4px;
  height: ${(props) => props.height}px;
  width: 100%;

  &::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #b5b5b5;
    line-break: auto;
  }

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    height: calc(${(props) => props.height}px + 10px);
  }
`;
