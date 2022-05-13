import { BsArrowRightSquare } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import ModalCompany from "../../Components/Modal/index";
import ModalProfile from "../../Components/Modal/modal-profile";
import { Menu } from "./style";

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
    <main>
      <Menu>
        Menu <BsArrowRightSquare />
      </Menu>
      <section>
        <div>
          <h1>Meu perfil</h1>
          {openModalCompany && (
            <ModalCompany
              open={openModalCompany}
              handleClose={handleCloseCompany}
            />
          )}
          <button onClick={handleOpenCompany}>
            <FiEdit />
          </button>
        </div>

        <hr />
        <div>
          <h2>Nome da empresa</h2>
          <h3>Cidade, UF</h3>
          <ul>
            <li>Endereço: </li>
            <li>CNPJ: </li>
            <li>Telefone comercial: </li>
            <li>Email Comercial: </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h1>Informações pessoais</h1>
          {openModalProfile && (
            <ModalProfile
              open={openModalProfile}
              handleClose={handleCloseProfile}
            />
          )}
          <button onClick={handleOpenProfile}>
            <FiEdit />
          </button>
        </div>

        <hr />

        <div>
          <h2>Nome da empreendedor</h2>
          <ul>
            <li>CPF: </li>
            <li>Email: </li>
            <li>Telefone: </li>
          </ul>
          <button>Alterar Senha</button>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
