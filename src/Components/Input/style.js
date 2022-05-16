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
      font-size: 20px;
    }
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.errors ? "#B22222" : "#FE8537")};

  @media (min-width: 768px) {
    height: 60px;
    border: 2px solid ${(props) => (props.errors ? "#B22222" : "#FE8537")};
    border-radius: 10px;
  }
`;
