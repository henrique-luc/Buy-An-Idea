import { useContext } from "react";
import { InterpriseList } from "../../Components/InterpriseList";
import { InterpriseListContext } from "../../Providers/interpriseList";
import { InvestidorContainer, LoadingPage } from "./styles";
import { useLogin } from "../../Providers/Login";
import Lamp from "../../assets/Lamp.svg";
import logo from "../../assets/Vector.svg";
import { Redirect } from "react-router-dom";

export const AplicationInvestor = () => {
  const { list, cardIsOpen } = useContext(InterpriseListContext);
  const { user } = useLogin()

  if(!user.accessToken || user.user.type !== "investor"){
    return <Redirect to="/"/>
}

  return (
    <>
      {list.length === 0 ? (
        <LoadingPage>
          <img src={logo} alt="imagem de carregamento" />
        </LoadingPage>
      ) : (
        <InvestidorContainer isInInfoCard={cardIsOpen}>
          <InterpriseList />

          <section className="ApoieEstaIdeia">
            <button>
              <img src={Lamp} alt="Ícone de lâmpada" />
              <h6>Apoie esta ideia</h6>
            </button>
            <p>
              Mesmo que não tenha interesse em investir, ajude esta ideia a
              granhar mais destaque para outros investidores com o seu apoiop
            </p>
          </section>
        </InvestidorContainer>
      )}
    </>
  );
};
