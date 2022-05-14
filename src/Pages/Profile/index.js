import { BsArrowRightSquare } from "react-icons/bs";
import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalCompany from "../../Components/Modal/index";
import ModalProfile from "../../Components/Modal/modal-profile";
import { Container, Content, Menu, Title } from "./style";

const ProfilePage = () => {
  const [openModalCompany, setOpenModalCompany] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

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
      <Menu>
        Menu <BsArrowRightSquare />
      </Menu>
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
          <h2>Nome da empresa</h2>
          <h3>Cidade, UF</h3>
          <ul>
            <li>Endereço: </li>
            <li>CNPJ: </li>
            <li>Telefone comercial: </li>
            <li>Email Comercial: </li>
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
          <h2>Nome do empreendedor</h2>
          <ul>
            <li>CPF: </li>
            <li>Email: </li>
            <li>Telefone: </li>
          </ul>
          <button>Alterar Senha</button>
        </Content>
      </section>
    </Container>
  );
};

export default ProfilePage;
