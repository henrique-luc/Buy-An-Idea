import Input from "../../Components/Input";
import CarouselText from "../../Components/Carrossel/Login-Register";
import { Div } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
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

  const onSubmitFunction = (data) => {};

  const passwordIsHidden = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Div>
      <CarouselText className="container_login-carousel" />

      <section>
        <h2>Login</h2>
        <form>
          <section>
            <Input
              register={register}
              errors={errors.email?.message}
              name="email"
              label={"Email"}
              type="email"
            />
          </section>
          <section>
            <Input
              register={register}
              errors={errors.password?.message}
              name="password"
              label={"Senha"}
              type={showPassword ? "text" : "password"}
              icon={showPassword ? FiEye : FiEyeOff}
              onClick={() => passwordIsHidden()}
            />
          </section>
          <section>
            <input type="radio" />
            <small>Permancer conectado</small>
          </section>
          <section>
            <button>Entrar</button>
          </section>
        </form>

        <section>
          <small>Esqueceu a senha?</small>
        </section>
      </section>
    </Div>
  );
};

export default Login;
