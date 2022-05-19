import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, Content, Title } from "./style";
import { FiUser, FiPhone, FiMail, FiCreditCard } from "react-icons/fi";
import { Redirect } from "react-router-dom";
import { useEditProfile } from "../../Providers/EditProfile";
import { useLogin } from "../../Providers/Login";

const InvestProfile = () => {
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const {user} = useLogin()
	const {setEditUser, editUser} = useEditProfile()

    if(!user){
      return <Redirect to="/"/>
    }


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
            <FiUser /> {editUser&&editUser.name} {editUser&&editUser.lastName}
          </h2>
          <ul>
            <li>
              <FiCreditCard />
              CPF
              <p>{editUser&&editUser.cpf}</p>
            </li>
            <li>
              <FiMail />
              Email
              <p>{editUser&&editUser.email}</p>
            </li>
            <li>
              <FiPhone />
              Telefone
              <p>{editUser&&editUser.phone}</p>
            </li>
          </ul>
        </Content>
      </section>
    </Container>
  );
};

export default InvestProfile;
