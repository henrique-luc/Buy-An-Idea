import styled from "styled-components";
import { InterPriseCardContainer } from "../../Components/InterpriseCard/styles";
import { Title } from "../Dashboard/style";

export const TitleIdea = styled(Title)`
  padding: 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

  h2 {
    margin-top: 3rem;
  }

  div {
    justify-content: flex-start;
  }
`;

export const CustomCard = styled(InterPriseCardContainer)`
  .CardTitle {
    font-size: 28px;
    padding-bottom: 1rem;
    color: var(--color-secundary);
  }

  .CardButtons2 {
    width: 78%;
    justify-content: center;
  }

  .ButtonX2,
  .ButtonX,
  .ButtonHeart,
  .ButtonHeart2 {
    display: none;
  }
`;
