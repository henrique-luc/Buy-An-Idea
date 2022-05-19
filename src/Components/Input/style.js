import styled from "styled-components";

export const CustomLabel = styled.label`
  width: 90%;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

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

    p {
      font-size: 16px;
    }
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.errors ? "#B22222" : "#FE8537")};
  font-family: "Open Sans", sans-serif;

  @media (min-width: 768px) {
    height: 42px;
    border: 2px solid ${(props) => (props.errors ? "#B22222" : "#FE8537")};
    border-radius: 10px;
  }
`;
