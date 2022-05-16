import Backdrop from "@mui/material/Backdrop";
//import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import Select from "../Select/index";
import { useForm } from "react-hook-form";
import {
  BoxEdit,
  ButtonEdit,
  CustomForm,
  InputDiv,
  ModalSubtitle,
  ModalTitle,
} from "./style";

const ModalProfile = ({ open, handleClose }) => {
  //FAZER SCHEMA

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
          <BoxEdit>
            <ModalTitle>Editar Perfil</ModalTitle>
            <ModalSubtitle>Informações pessoais</ModalSubtitle>
            <CustomForm onSubmit={handleSubmit}>
              <InputDiv>
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
              </InputDiv>
              <InputDiv>
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
              </InputDiv>
              <InputDiv>
                <Select
                  register={register}
                  title={"Como você se identifica"}
                  defaultValue={""}
                  name="genre"
                >
                  <option disabled value="">
                    Escolha uma opção
                  </option>
                  <option value="man">Homem (Trans ou Cis)</option>
                  <option value="woman">Mulher (Trans ou Cis)</option>
                  <option value="non-binary">Gênero Não-Binário</option>
                </Select>
                <Input
                  register={register}
                  name={"phone"}
                  label={"Telefone"}
                  type="text"
                />
              </InputDiv>
              <ButtonEdit type="submit">Salvar Informações</ButtonEdit>
            </CustomForm>
          </BoxEdit>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalProfile;
