import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import ButtonClose from "../../assets/Vector-CloseModal.svg";
import { useForm } from "react-hook-form";
import {
  BoxEdit,
  ButtonEdit,
  ButtonCloseModal,
  CustomForm,
  DivAddress,
  InputAddress,
  InputDiv,
  ModalSubtitle,
  ModalTitle,
  HeaderModal,
} from "./style";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEditProfile } from "../../Providers/EditProfile";
import { useLogin } from "../../Providers/Login";
import { useEffect } from "react";

const ModalCompany = ({ open, handleClose }) => {
  const schema = yup.object().shape({
    companyName: yup.string().required("Preencha o campo"),
    cnpj: yup
      .string()
      .required("Preencha o campo")
      .min(14, "Mínimo de 14 dígitos"),
    companyEmail: yup
      .string()
      .required("Preencha o campo")
      .email("Este email não é válido"),
    companyPhone: yup.string().required("Preencha o campo"),
    street: yup.string().required("Preencha o campo"),
    city: yup.string().required("Preencha o campo"),
    cep: yup.string().required("Preencha o campo"),
    number: yup.string().required("Preencha o campo"),
    uf: yup.string().required("Preencha o campo"),
  });
  const {user} = useLogin()
	const {setEditUser, editUser,isLoading, setIsLoading} = useEditProfile()
  //const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));
 
  const { id, email, password, company, address } = editUser;
  const { street, city, cep, number, district, uf } = address;
  const { companyName, companyEmail, companyPhone, cnpj } = company;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const {
      companyEmail,
      companyName,
      companyPhone,
      cnpj,
      street,
      district,
      number,
      city,
      cep,
      uf,
      companyType,
    } = data;

    const userData= {
      company: { companyEmail, companyName, companyPhone, cnpj, companyType },
      address: { street, district, number, city, cep, uf },
    };

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
              <ModalSubtitle>Informações da empresa</ModalSubtitle>
              <ButtonCloseModal onClick={handleClose}>
                <img src={ButtonClose} alt="" />
              </ButtonCloseModal>
            </HeaderModal>
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
              <InputDiv>
                <Input
                  errors={errors.companyName?.message}
                  defaultValue={companyName}
                  register={register}
                  name={"companyName"}
                  label={"Nome da empresa"}
                  type="text"
                />
                <Input
                  errors={errors.cnpj?.message}
                  defaultValue={cnpj}
                  register={register}
                  name={"cnpj"}
                  label={"CNPJ"}
                  type="text"
                />
              </InputDiv>
              <InputDiv>
                <Input
                  errors={errors.companyEmail?.message}
                  defaultValue={companyEmail}
                  register={register}
                  name={"companyEmail"}
                  label={"Email Comercial"}
                  type="text"
                />
                <Input
                  errors={errors.companyPhone?.message}
                  defaultValue={companyPhone}
                  register={register}
                  name={"companyPhone"}
                  label={"Telefone Comercial"}
                  type="text"
                />
              </InputDiv>
              <DivAddress>
                <p>Endereço</p>
                <InputAddress>
                  <input
                    defaultValue={street}
                    placeholder="Rua"
                    errors={errors.street?.message}
                    {...register("street")}
                    type="text"
                  />
                  <input
                    defaultValue={district}
                    placeholder="Bairro"
                    errors={errors.district?.message}
                    {...register("district")}
                    type="text"
                  />
                  <input
                    defaultValue={number}
                    placeholder="Número"
                    errors={errors.number?.message}
                    {...register("number")}
                    type="number"
                  />
                  <input
                    defaultValue={city}
                    placeholder="Cidade"
                    errors={errors.city?.message}
                    {...register("city")}
                    type="text"
                  />
                  <input
                    defaultValue={cep}
                    placeholder="CEP"
                    errors={errors.cep?.message}
                    {...register("cep")}
                    type="number"
                  />
                  <input
                    defaultValue={uf}
                    placeholder="UF"
                    errors={errors.uf?.message}
                    {...register("uf")}
                    type="text"
                  />
                </InputAddress>
              </DivAddress>
              <ButtonEdit type="submit">Salvar Informações</ButtonEdit>
            </CustomForm>
          </BoxEdit>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCompany;
