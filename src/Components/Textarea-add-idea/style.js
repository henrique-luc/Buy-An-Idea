import styled from "styled-components";

export const TextareaContainer = styled.input`
  border: 2px solid var(--color-support-2);
  border-radius: 4px;
  height: ${(props) => props.height}px;
  width: 100%;
  padding: 0 10px;

  ::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #b5b5b5;
  }

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    height: calc(${(props) => props.height}px + 40px);
  }
`;
