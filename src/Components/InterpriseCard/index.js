import { InfoCard, InterPriseCardContainer } from "./styles";
import ButtonX from "../../assets/ButtonX.svg";
import ButtonHamb from "../../assets/ButtonHamb.svg";
import ButtonHeart from "../../assets/ButtonHeart.svg";
import { useContext } from "react";
import { InterpriseListContext } from "../../Providers/interpriseList";

import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";

export const IntrerPriseCard = ({ empresa }) => {
  const { name, idea } = empresa;

  const {
    video,
    about,
    coreBusiness,
    payback,
    valuation,
    document,
    website,
    facebook,
    instagram,
    linkedin,
    twitter,
    ideaValue,
  } = idea;

  const embedCodeVideo = video.slice(32, 43);

  const { cardIsOpen, setCardIsOpen, counter, setCounter } = useContext(
    InterpriseListContext
  );

  return (
    <InterPriseCardContainer inInfoCard={cardIsOpen}>
      <h2 className="CardTitle">{name}</h2>
      <div className="CardVideoContainer">
        <iframe
          className="CardVideo"
          // src={`https://www.youtube.com/embed/${embedCodeVideo}`}
          src="https://www.youtube.com/embed/fqfYy_il2-Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p className="CardAbout">{about}</p>

        <section className="CardButtons">
          <button className="ButtonX" onClick={() => setCounter(counter + 1)}>
            <img src={ButtonX} alt="botão de excluir" />
          </button>
          <button
            className="ButtonHamb"
            onClick={() => setCardIsOpen(!cardIsOpen)}
          >
            <img src={ButtonHamb} alt="botão de abrir menu" />
          </button>
          <button
            className="ButtonHeart"
            onClick={() => {
              //Lógica para adicionar ao contacts
              console.log(counter);
              setCounter(counter + 1);
            }}
          >
            <img src={ButtonHeart} alt="botão de curtir proposta" />
          </button>
        </section>
      </div>
      <InfoCard inInfoCard={cardIsOpen}>
        <h2>{name}</h2>
        <div className="InfoCardSobre">
          <h4>Sobre</h4>
          <p>{about}</p>
        </div>
        <div className="InfoCardValor">
          <h4>Valor do investimento</h4>
          <p>{ideaValue}</p>
        </div>
        <div className="InfoCardImages">
          <h4>imagens</h4>
          {/* Fazer um map para renderizar as imagens */}
          {/* Aqui ficarão imagens de exemplo apenas */}
          {/* <section className="ImgContainer">
            <img
              src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
              alt="Imagem exemplo"
            />
            <img
              src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
              alt="Imagem exemplo"
            />
            <img
              src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
              alt="Imagem exemplo"
            />
          </section> */}
        </div>

        <div className="InfoCardSite">
          <h4>Site da empresa</h4>
          <a href={`${website}`}>{website}</a>
        </div>

        <section className="InfoCardContact">
          <div className="InfoCardSocial InfoCardContact--insta">
            <img alt="Ícone do instagram" src={Insta} />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://instagram.com/${instagram}`}
            >
              @kenzieacademybr
            </a>
          </div>
          <div className="InfoCardSocial InfoCardContact--facebook">
            <img alt="Ícone do instagram" src={Facebook} />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.facebook.com/${facebook}`}
            >
              Facebook da empresa
            </a>
          </div>
          <div className="InfoCardSocial InfoCardContact--linkedin">
            <img alt="Ícone do instagram" src={Linkedin} />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.linkedin.com/in/${linkedin}`}
            >
              Linkedin da empresa
            </a>
          </div>
        </section>
        <section className="CardButtons2">
          <button className="ButtonX2">
            <img src={ButtonX} alt="botão de excluir" />
          </button>
          <button
            className="ButtonHamb2"
            onClick={() => setCardIsOpen(!cardIsOpen)}
          >
            <img src={ButtonHamb} alt="botão de abrir menu" />
          </button>
          <button className="ButtonHeart2">
            <img src={ButtonHeart} alt="botão de curtir proposta" />
          </button>
        </section>
      </InfoCard>
    </InterPriseCardContainer>
  );
};
