import { useForm } from "react-hook-form"
import Input from "../../Components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CustomForm, CustomMain, Logo } from "./style"
import logo from "../../assets/Vector.svg"
import Select from "../../Components/Select"

const Register = () =>{
    const schema = yup.object().shape({
        name:yup.string().required("Preencha o campo").trim(),
        lastName:yup.string().required("Preencha o campo").trim(),
        cpf:yup.string().required("Preencha o campo").trim(),
        email:yup.string().email("Email inválido").required("Preencha o campo").trim(),
        phone:yup.string().required("Preencha o campo").trim(),
    })

    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
        <CustomMain>
        <Logo><img src={logo} alt="logo"/> <h1>Buy<span>An</span>Idea</h1></Logo>


        <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Input 
            errors={errors.name?.message} 
            register={register} name={"name"} 
            label={"Nome"}
            placeholder="Insira seu nome" 
            type="text"
        />
        <Input 
            errors={errors.lastName?.message} 
            register={register} name={"lastName"} 
            label={"Sobrenome"}
            placeholder="Insira seu sobrenome" 
            type="text"
        />
         <Input 
            errors={errors.cpf?.message} 
            register={register} name={"cpf"} 
            label={"Cpf"}
            placeholder="Insira seu CPF" 
            type="text"
        />
        <Input 
            errors={errors.email?.message} 
            register={register} name={"email"} 
            label={"Email"}
            placeholder="Insira seu email" 
            type="text"
        />
        <Input 
            errors={errors.phone?.message} 
            register={register} name={"phone"} 
            label={"Telefone"}
            placeholder="Insira seu telefone" 
            type="text"
        />
        <Select register={register} title={'Como você se identifica'} name='genre'>
            <option disabled value={''} selected>Como você se identifica</option>
            <option>Homem</option>
            <option>Mulher</option>
        </Select>
       
        <button>teste</button>
        </CustomForm>
        </CustomMain>
    )
}

export default Register