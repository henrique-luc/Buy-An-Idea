import { useContext } from "react";
import { InterpriseListContext } from "../../Providers/interpriseList";
import { IntrerPriseCard } from "../InterpriseCard";
import { InterpriseListContainer, LoadingPage } from "./styles";

import logo from "../../assets/Vector.svg";

export const InterpriseList = () => {
  const { list, setCounter } = useContext(InterpriseListContext);
  return (
    <InterpriseListContainer>
      {list.map((empresa, index) => {
        if (empresa.idea) {
          return <IntrerPriseCard key={index} empresa={empresa} />;
        } else {
          return (
            <LoadingPage key={index}>
              <img src={logo} alt="imagem de carregamento" />
              <p>
                Todas as empresas já foram exibidas. Deseja exibir novamente ?
              </p>
              <button onClick={() => setCounter(1)}>Exibir Novamente</button>
            </LoadingPage>
          );
        }
      })}
    </InterpriseListContainer>
  );
};
