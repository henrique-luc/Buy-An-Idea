import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, Content, Title } from "./style";
import { FiUser, FiPhone, FiMail, FiCreditCard } from "react-icons/fi";
import { Redirect } from "react-router-dom";

const InvestProfile = () => {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login")) || {};

  const { user } = userObj;


  if(!userObj.accessToken || user.type !== "investor"){
    return <Redirect to="/"/>
  }

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
    </Container>
  );
};

export default InvestProfile;
