import Input from "../../Components/Input";
import CarouselText from "../../Components/Carrossel/Login-Register";
import { CustomFiEye, CustomFiEyeOff, CustomForm, Div } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email deve estar no formato email@provedor.com"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  const passwordIsHidden = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Div>
      <CarouselText className="container_login-carousel" />

      <section className="container_login-form">
        <h2>Login</h2>
        <CustomForm onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              errors={errors.email?.message}
              name="email"
              label={"Email"}
              type="email"
            />
            <section>
            <Input
              register={register}
              errors={errors.password?.message}
              name="password"
              label={"Senha"}
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? <CustomFiEye onClick={() => passwordIsHidden()}/> : <CustomFiEyeOff onClick={() => passwordIsHidden()}/>}
            </section>
          <section className="container_login-checkbox">
            <input type="checkbox" />
            <small>Permancer conectado</small>
          </section>
          <section>
            <button type="submit">Entrar</button>
          </section>
        </CustomForm>

        <section className="container_login-small">
          <small>Esqueceu a senha?</small>
        </section>
      </section>
    </Div>
  );
};

export default Login;
