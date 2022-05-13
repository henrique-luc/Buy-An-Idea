import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { ButtonEdit, ModalSubtitle, ModalTitle } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  p: 4,
};

const ModalProfile = ({ open, handleClose }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalTitle>Editar Perfil</ModalTitle>
            <ModalSubtitle>Informações pessoais</ModalSubtitle>
            <form onSubmit={handleSubmit}>
              <Input
                register={register}
                name={"name"}
                label={"Nome"}
                type="text"
              />
              <Input
                register={register}
                name={"lastName"}
                label={"Sobrenome"}
                type="text"
              />
              <Input
                register={register}
                name={"cpf"}
                label={"CPF"}
                type="text"
              />
              <Input
                register={register}
                name={"email"}
                label={"Email"}
                type="text"
              />
              <Input
                register={register}
                name={"phone"}
                label={"Telefone"}
                type="text"
              />

              <ButtonEdit type="submit">Salvar Informações</ButtonEdit>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalProfile;
