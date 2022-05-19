import { InfoCard, InterPriseCardContainer } from "./styles";
import ButtonX from "../../assets/ButtonX.svg";
import ButtonHamb from "../../assets/ButtonHamb.svg";
import ButtonHeart from "../../assets/ButtonHeart.svg";
import { useContext, useState } from "react";
import { InterpriseListContext } from "../../Providers/interpriseList";

import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/Facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import { MatchContext } from "../../Providers/Match";

export const IntrerPriseCard = ({ empresa }) => {
  const { idea, company } = empresa;

  console.log(company.companyName);

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

  const { acceptMatch } = useContext(MatchContext);

  return (
    <InterPriseCardContainer inInfoCard={cardIsOpen}>
      <h2 className="CardTitle">{company.companyName}</h2>
      <div className="CardVideoContainer">
        <iframe
          className="CardVideo"
          src={`https://www.youtube.com/embed/${embedCodeVideo}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p className="CardAbout">{about}</p>

        <section className="CardButtons">
          <button
            className="ButtonX"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
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
              setCounter(counter + 1);
            }}
          >
            <img src={ButtonHeart} alt="botão de curtir proposta" />
          </button>
        </section>
      </div>
      <InfoCard inInfoCard={cardIsOpen}>
        <h2>{company.companyName}</h2>
        <div className="InfoCardSobre">
          <h4>Sobre</h4>
          <p>{about}</p>
        </div>
        <div className="InfoCardValor">
          <h4>Proposta inicial</h4>
          <p>{ideaValue}</p>
        </div>
        <div className="InfoCardPayback">
          <h4>Payback</h4>
          <p>
            {payback.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="InfoCardValuation">
          <h4>Valuation</h4>
          <p>
            {valuation.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
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
              @{instagram}
            </a>
          </div>
          <div className="InfoCardSocial InfoCardContact--facebook">
            <img alt="Ícone do instagram" src={Facebook} />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.facebook.com/${facebook}`}
            >
              {facebook}
            </a>
          </div>
          <div className="InfoCardSocial InfoCardContact--linkedin">
            <img alt="Ícone do instagram" src={Linkedin} />
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.linkedin.com/in/${linkedin}`}
            >
              {linkedin}
            </a>
          </div>
        </section>
        <section className="CardButtons2">
          <button className="ButtonX2" onClick={() => setCounter(counter + 1)}>
            <img src={ButtonX} alt="botão de excluir" />
          </button>
          <button
            className="ButtonHamb2"
            onClick={() => setCardIsOpen(!cardIsOpen)}
          >
            <img src={ButtonHamb} alt="botão de abrir menu" />
          </button>
          <button
            className="ButtonHeart2"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <img src={ButtonHeart} alt="botão de curtir proposta" />
          </button>
        </section>
      </InfoCard>
    </InterPriseCardContainer>
  );
};
