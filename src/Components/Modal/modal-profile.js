import Backdrop from "@mui/material/Backdrop";
//import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import Select from "../Select/index";
import { useForm } from "react-hook-form";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
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

  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

  const { accessToken, user } = userObj;

  const { id, email, password, name, lastName, cpf, phone } = user;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, email, lastName, cpf, phone, companyType } = data;

    const user = { name, lastName, cpf, email, phone };

    api
      .patch(`/users/${id}`, user, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: {
          userId: id,
          email: email,
          password: password,
        },
      })
      .then((res) => {
        toast.success("Dados editados com sucesso");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

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
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
              <InputDiv>
                <Input
                  defaultValue={name}
                  register={register}
                  name={"name"}
                  label={"Nome"}
                  type="text"
                />
                <Input
                  defaultValue={lastName}
                  register={register}
                  name={"lastName"}
                  label={"Sobrenome"}
                  type="text"
                />
              </InputDiv>
              <InputDiv>
                <Input
                  defaultValue={cpf}
                  register={register}
                  name={"cpf"}
                  label={"CPF"}
                  type="text"
                />
                <Input
                  defaultValue={email}
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
                  defaultValue={phone}
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
