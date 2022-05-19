import { useContext } from "react";
import { InterpriseList } from "../../Components/InterpriseList";
import { InterpriseListContext } from "../../Providers/interpriseList";
import { InvestidorContainer } from "./styles";

import Lamp from "../../assets/Lamp.svg";

export const AplicationInvestor = () => {
  const { cardIsOpen } = useContext(InterpriseListContext);
  return (
    <InvestidorContainer isInInfoCard={cardIsOpen}>
      <InterpriseList />

      <section className="ApoieEstaIdeia">
        <button>
          <img src={Lamp} alt="Ícone de lâmpada" />
          <h6>Apoie esta ideia</h6>
        </button>
        <p>
          Mesmo que não tenha interesse em investir, ajude esta ideia a granhar
          mais destaque para outros investidores com o seu apoiop
        </p>
      </section>
    </InvestidorContainer>
  );
};
