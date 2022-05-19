import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import Select from "../Select/index";
import ButtonClose from "../../assets/Vector-CloseModal.svg";
import { useForm } from "react-hook-form";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import { useEditProfile } from "../../Providers/EditProfile";
import { useLogin } from "../../Providers/Login";
import {
  BoxEdit,
  ButtonEdit,
  CustomForm,
  InputDiv,
  HeaderModal,
  ButtonCloseModal,
  ModalSubtitle,
  ModalTitle,
} from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalProfile = ({ open, handleClose }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Preencha o campo"),
    lastName: yup.string().required("Preencha o campo"),
    cpf: yup
      .string()
      .required("Preencha o campo")
      .min(11, "Mínimo de 11 dígitos"),
    email: yup
      .string()
      .required("Preencha o campo")
      .email("Este email não é válido"),
    phone: yup.string().required("Preencha o campo"),
  });

  const {user} = useLogin()
	const {setEditUser, editUser,isLoading, setIsLoading} = useEditProfile()
  const { id, email, password, name, lastName, cpf, phone } = editUser;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { name, email, lastName, cpf, phone, companyType } = data;

    const userData = { name, lastName, cpf, email, phone };

    api
      .patch(`/users/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: {
          userId: id,
          email: email,
          password: password,
        },
      })
      .then((res) => {
        toast.success("Dados editados com sucesso");
        handleClose()
        setIsLoading(false)
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  return (
    <div>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxEdit>
            <HeaderModal>
              <ModalTitle>Editar Perfil</ModalTitle>
              <ModalSubtitle>Informações pessoais</ModalSubtitle>
              <ButtonCloseModal onClick={handleClose}>
                <img src={ButtonClose} alt="" />
              </ButtonCloseModal>
            </HeaderModal>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
              <InputDiv>
                <Input
                  errors={errors.name?.message}
                  defaultValue={name}
                  register={register}
                  name={"name"}
                  label={"Nome"}
                  type="text"
                />
                <Input
                  errors={errors.lastName?.message}
                  defaultValue={lastName}
                  register={register}
                  name={"lastName"}
                  label={"Sobrenome"}
                  type="text"
                />
              </InputDiv>
              <InputDiv>
                <Input
                  errors={errors.cpf?.message}
                  defaultValue={cpf}
                  register={register}
                  name={"cpf"}
                  label={"CPF"}
                  type="text"
                />
                <Input
                  errors={errors.email?.message}
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
                  errors={errors.phone?.message}
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
