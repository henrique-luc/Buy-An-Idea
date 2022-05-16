import { CustomDiv, CustomMain, CustomText, FormBox, Logo } from "../Register/style"
import logo from "../../assets/Vector.svg"
import Input from "../../Components/Input"
import Select from "../../Components/Select"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button"
import { CustomFormInvest } from "./style"
import { useRegister } from "../../Providers/Register"

const InvestRegister = () =>{
    const schema = yup.object().shape({
        name:yup.string().required("Preencha o campo").trim(),
        lastName:yup.string().required("Preencha o campo").trim(),
        cpfCnpj:yup.string().required("Preencha o campo").min(11,"Insira um cpf valido").max(14,"Insira um Cpf ou Cnpj valido").trim(),
        email:yup.string().email("Email inválido").required("Preencha o campo").trim(),
        phone:yup.string().required("Preencha o campo").trim(),
        password:yup.string().required("Preencha o campo").trim(),
        confirmPassword:yup.string().required("Preencha o campo").oneOf([yup.ref('password')], 'Senhas diferentes').trim()
    })

    const {user,setUser, userRegister} = useRegister()

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>{
        const {email,password,name,lastName,cpfCnpj,phone,genre} = data
        setUser({
            email: email,
            name: name,
            lastName: lastName,
            cpfCnpj: cpfCnpj,
            phone:phone,
            genre: genre,
            type: "investor", 
            matches: [],
            password: password,
        })
        userRegister()
    }

    return(
        <>
        <CustomMain>
            <CustomText>
            <Logo><img src={logo} alt="logo"/> <h1>Buy<span>An</span>Idea</h1></Logo>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sapien nec vel consequat lacus volutpat id.</p>
            </CustomText>
        <FormBox>
            <CustomDiv>
                <h2>Cadastro de Investidor</h2>
            </CustomDiv>
            <CustomFormInvest onSubmit={handleSubmit(onSubmit)}>
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
                    errors={errors.cpfCnpj?.message} 
                    register={register} name={"cpfCnpj"} 
                    label={"CPF / CNPJ"}
                    placeholder="Insira seu CPF/CNPJ" 
                    type="number"
                    />
                <Input 
                    errors={errors.email?.message} 
                    register={register} name={"email"} 
                    label={"Email"}
                    placeholder="Insira seu email" 
                    type="email"
                />
                <Input 
                    errors={errors.phone?.message} 
                    register={register} name={"phone"} 
                    label={"Telefone"}
                    placeholder="Insira seu telefone" 
                    type="text"
                />
                <Select register={register} title={'Como você se identifica'}  defaultValue={''} name='genre'>
                    <option disabled value=''>Escolha uma opção</option>
                    <option value='man'>Homem (Trans ou Cis)</option>
                    <option value='woman'>Mulher (Trans ou Cis)</option>
                    <option value='non-binary'>Gênero Não-Binário</option>
                </Select>
                <Input 
                    errors={errors.password?.message} 
                    register={register} name={"password"} 
                    label={"Digite sua senha"}
                    placeholder="Digite sua senha" 
                    type="password"
                />
                <Input 
                    errors={errors.confirmPassword?.message} 
                    register={register} name={"confirmPassword"} 
                    label={"Confirme sua senha"}
                    placeholder="Confirme sua senha" 
                    type="password"
                />

                <Button white>Finalizar</Button>
            </CustomFormInvest>
        </FormBox>
        </CustomMain>
        </>
    )
}

export default InvestRegister