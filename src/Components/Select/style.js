import styled from "styled-components";

export const CustomSelect = styled.label`
  width: 90%;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  select {
    width: 100%;
    height: 42px;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid var(--color-secundary);
    font-family: "Open Sans", sans-serif;
  }

  p {
    font-size: 14px;
    color: var(--gray-3);
    margin-bottom: 9px;
    font-weight: 500;
  }

  span {
    font-size: 14px;
    color: #b22222;
  }

  @media (min-width: 768px) {
    width: 42%;
    select {
      border: 2px solid #fe8537;
      border-radius: 10px;
    }
    p {
      font-size: 16px;
    }
  }
`;
