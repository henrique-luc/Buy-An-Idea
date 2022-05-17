import { useContext } from "react";
import { InterpriseList } from "../../Components/InterpriseList";
import { InterpriseListContext } from "../../Providers/interrpiseList";
import { InvestidorContainer, LoadingPage } from "./styles";

import Perfil from "../../assets/Perfil.svg";
import Chat from "../../assets/Chat.svg";
import Menu from "../../assets/Menu.svg";
import Lamp from "../../assets/Lamp.svg";

import logo from "../../assets/Vector.svg";

export const AplicationInvestor = () => {
  const { list, cardIsOpen } = useContext(InterpriseListContext);
  return (
    <>
      {list.length === 0 ? (
        <LoadingPage>
          <img src={logo} alt="imagem de carregamento" />
        </LoadingPage>
      ) : (
        <InvestidorContainer isInInfoCard={cardIsOpen}>
          <header className="header">
            <h1>H E A D E R</h1>
          </header>
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

          <footer className="FooterButtons">
            <button className="PerfilButton">
              <img src={Perfil} alt="Ícone de perfil" />
              <h6>Perfil</h6>
            </button>
            <button>
              <img src={Chat} alt="Ícone de chat" />
              <h6>Chat</h6>
            </button>
            <button>
              <img src={Menu} alt="Ícone de menu" />
              <h6>Menu</h6>
            </button>
          </footer>
        </InvestidorContainer>
      )}
    </>
  );
};
