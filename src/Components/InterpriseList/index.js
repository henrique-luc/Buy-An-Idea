import { useContext } from "react";
import { InterpriseListContext } from "../../Providers/interrpiseList";
import { IntrerPriseCard } from "../InterpriseCard";
import { InterpriseListContainer } from "./styles";

export const InterpriseList = () => {
  const { list } = useContext(InterpriseListContext);

  return (
    <InterpriseListContainer>
      {list.map((empresa, index) => {
        const { name } = empresa;

        return <IntrerPriseCard key={index} empresa={empresa} />;
      })}
    </InterpriseListContainer>
  );
};
