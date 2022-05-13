import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import { useForm } from "react-hook-form";
import { ButtonEdit, CustomForm, ModalSubtitle, ModalTitle } from "./style";

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

const ModalCompany = ({ open, handleClose }) => {
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
            <ModalSubtitle>Informações da empresa</ModalSubtitle>
            <CustomForm onSubmit={handleSubmit}>
              <Input
                register={register}
                name={"companyName"}
                label={"Nome da empresa"}
                type="text"
              />
              <Input
                register={register}
                name={"cnpj"}
                label={"CNPJ"}
                type="text"
              />
              <Input
                register={register}
                name={"companyEmail"}
                label={"Email Comercial"}
                type="text"
              />
              <Input
                register={register}
                name={"companyPhone"}
                label={"Telefone Comercial"}
                type="text"
              />

              <ButtonEdit type="submit">Salvar Informações</ButtonEdit>
            </CustomForm>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCompany;
