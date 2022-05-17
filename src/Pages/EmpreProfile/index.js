import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalCompany from "../../Components/ModalProfile/modal-company";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, Content, Title } from "./style";

const EmpreProfile = () => {
  const [openModalCompany, setOpenModalCompany] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login")) || {};

  const { user } = userObj;

  const { company, address, name, lastName, cpf, email, phone } = user;

  const { street, city, cep, number, district, uf } = address;

  const { companyName, companyEmail, companyPhone, cnpj } = company;

  const handleCloseCompany = () => setOpenModalCompany(false);

  const handleOpenCompany = () => {
    setOpenModalCompany(true);
  };

  const handleCloseProfile = () => setOpenModalProfile(false);

  const handleOpenProfile = () => {
    setOpenModalProfile(true);
  };

  return (
    <Container>
      <section>
        <Title>
          <h1>Meu perfil</h1>
          {openModalCompany && (
            <ModalCompany
              open={openModalCompany}
              handleClose={handleCloseCompany}
            />
          )}
          <button onClick={handleOpenCompany}>
            <img src={EditIcon} alt="icone-editar" />
          </button>
        </Title>

        <hr />

        <Content>
          <h2>{companyName}</h2>
          <h3>
            {city}, {uf}
          </h3>
          <ul>
            <li>
              Endereço: {street} {number} - {district}, {cep}
            </li>
            <li>CNPJ: {cnpj}</li>
            <li>Telefone comercial: {companyPhone}</li>
            <li>Email Comercial: {companyEmail}</li>
          </ul>
        </Content>
      </section>
      <section>
        <Title>
          <h1>Informações pessoais</h1>
          {openModalProfile && (
            <ModalProfile
              open={openModalProfile}
              handleClose={handleCloseProfile}
            />
          )}
          <button onClick={handleOpenProfile}>
            <img src={EditIcon} alt="icone-editar" />
          </button>
        </Title>

        <hr />

        <Content>
          <h2>
            {name} {lastName}
          </h2>
          <ul>
            <li>CPF: {cpf}</li>
            <li>Email: {email}</li>
            <li>Telefone: {phone}</li>
          </ul>
          <button>Alterar Senha</button>
        </Content>
      </section>
    </Container>
  );
};

export default EmpreProfile;
