import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalCompany from "../../Components/ModalProfile/modal-company";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, BoxContainer, Content, Title } from "./style";
import {
  FiMapPin,
  FiUser,
  FiPhone,
  FiMail,
  FiCreditCard,
} from "react-icons/fi";
import Menu from "../../Components/Menu";

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
      <aside>
        <Menu />
      </aside>
      <BoxContainer>
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
                <FiMapPin />
                Endereço
                <p>
                  {street} {number} - {district}, {cep}
                </p>
              </li>
              <li>
                <FiCreditCard />
                CNPJ
                <p>{cnpj}</p>
              </li>
              <li>
                <FiPhone />
                Telefone comercial
                <p>{companyPhone}</p>
              </li>
              <li>
                <FiMail />
                Email Comercial
                <p>{companyEmail}</p>
              </li>
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
              <FiUser /> {name} {lastName}
            </h2>
            <ul>
              <li>
                <FiCreditCard />
                CPF
                <p>{cpf}</p>
              </li>
              <li>
                <FiMail />
                Email
                <p>{email}</p>
              </li>
              <li>
                <FiPhone />
                Telefone
                <p>{phone}</p>
              </li>
            </ul>
          </Content>
        </section>
      </BoxContainer>
    </Container>
  );
};

export default EmpreProfile;
