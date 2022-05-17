import Backdrop from "@mui/material/Backdrop";
//import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Input from "../Input/index";
import { useForm } from "react-hook-form";
import {
  BoxEdit,
  ButtonEdit,
  CustomForm,
  DivAddress,
  InputEndereco,
  InputDiv,
  ModalSubtitle,
  ModalTitle,
} from "./style";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

const ModalCompany = ({ open, handleClose }) => {
  //FAZER SCHEMA

  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

  const { accessToken, user } = userObj;

  const { id, email, password, company, address } = user;

  const { street, city, cep, number, district, uf } = address;

  const { companyName, companyEmail, companyPhone, cnpj } = company;

  const { register, handleSubmit } = useForm();

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

    const user = {
      company: { companyEmail, companyName, companyPhone, cnpj, companyType },
      address: { street, district, number, city, cep, uf },
    };

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
            <ModalSubtitle>Informações da empresa</ModalSubtitle>
            {/* <ButtonClose>x</ButtonClose> */}
            <CustomForm onSubmit={handleSubmit(onSubmit)}>
              <InputDiv>
                <Input
                  defaultValue={companyName}
                  register={register}
                  name={"companyName"}
                  label={"Nome da empresa"}
                  type="text"
                />
                <Input
                  defaultValue={cnpj}
                  register={register}
                  name={"cnpj"}
                  label={"CNPJ"}
                  type="text"
                />
              </InputDiv>
              <InputDiv>
                <Input
                  defaultValue={companyEmail}
                  register={register}
                  name={"companyEmail"}
                  label={"Email Comercial"}
                  type="text"
                />
                <Input
                  defaultValue={companyPhone}
                  register={register}
                  name={"companyPhone"}
                  label={"Telefone Comercial"}
                  type="text"
                />
              </InputDiv>
              <DivAddress>
                <p>Endereço</p>
                <InputEndereco>
                  <input
                    defaultValue={street}
                    placeholder="Rua"
                    //errors={errors.street?.message}
                    {...register("street")}
                    type="text"
                  />
                  <input
                    defaultValue={district}
                    placeholder="Bairro"
                    //errors={errors.district?.message}
                    {...register("district")}
                    type="text"
                  />
                  <input
                    defaultValue={number}
                    placeholder="Número"
                    //errors={errors.number?.message}
                    {...register("number")}
                    type="number"
                  />
                  <input
                    defaultValue={city}
                    placeholder="Cidade"
                    //errors={errors.city?.message}
                    {...register("city")}
                    type="text"
                  />
                  <input
                    defaultValue={cep}
                    placeholder="CEP"
                    //errors={errors.cep?.message}
                    {...register("cep")}
                    type="number"
                  />
                  <input
                    defaultValue={uf}
                    placeholder="UF"
                    //errors={errors.uf?.message}
                    {...register("uf")}
                    type="text"
                  />
                </InputEndereco>
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
