import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, Content, Title } from "./style";

const InvestProfile = () => {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login")) || {};

  const { user } = userObj;
  const { name, lastName, cpf, email, phone } = user;

  const handleCloseProfile = () => setOpenModalProfile(false);

  const handleOpenProfile = () => {
    setOpenModalProfile(true);
  };

  return (
    <Container>
      <section>
        <Title>
          <h1>Meu perfil</h1>
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

export default InvestProfile;
