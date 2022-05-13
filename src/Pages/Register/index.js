import { useForm } from "react-hook-form"
import Input from "../../Components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CustomDiv, CustomForm, CustomMain, Logo , CustomLinearProgress, CustomBox, CustomText, FormBox, DivButton} from "./style"
import logo from "../../assets/Vector.svg"
import Select from "../../Components/Select"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useState } from "react"

const Register = () =>{

    const [progress, setProgress] = useState(20)
    const [user, setUser] = useState({})

    const schema = yup.object().shape({
        name:yup.string().required("Preencha o campo").trim(),
        lastName:yup.string().required("Preencha o campo").trim(),
        cpf:yup.string().required("Preencha o campo").trim(),
        email:yup.string().email("Email inválido").required("Preencha o campo").trim(),
        phone:yup.string().required("Preencha o campo").trim(),
    })

    const schema2 = yup.object().shape({
        companyName:yup.string().required("Preencha o campo").trim(),
        cnpj:yup.string().required("Preencha o campo").trim(),
        companyPhone:yup.string().required("Preencha o campo").trim(),
        companyEmail:yup.string().email("Email inválido").required("Preencha o campo").trim(),
    })

    const schema3 = yup.object().shape({
        password:yup.string().required("Preencha o campo").trim(),
        confirmPassword:yup.string().required("Preencha o campo").trim(),
    })

    const {register, handleSubmit,formState:{errors}} = useForm({
            resolver:yupResolver((progress === 20 && schema) || (progress === 55 && schema2) || (progress === 99 && schema3))
    })

    const onSubmit = (data) =>{
        if(progress === 20){
            setUser(data)
            setProgress(55)
        }else if(progress === 55){
            setUser({...user, ...data})
            setProgress(99)
        }else if(progress === 99){
            setUser({...user, ...data})
            setProgress(100)
        }else if(progress === 100){
            console.log(user)
        }
    }


    return(
        <CustomMain>
            <CustomText>
            <Logo><img src={logo} alt="logo"/> <h1>Buy<span>An</span>Idea</h1></Logo>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sapien nec vel consequat lacus volutpat id.</p>
            </CustomText>
            <FormBox>
                <CustomDiv>
                    <h2>Cadastre a sua empresa</h2>
                </CustomDiv>

                <CustomBox sx={{ width: '100%', color: '#FE8537'}}>
                <CustomLinearProgress variant="determinate" value={progress} color="inherit" />
                <div>
                    <p>Seus dados pessoais</p>
                    <p>Dados da sua empresa</p>
                    <p>Finalize seu cadastro</p>
                </div>
                </CustomBox>
                <CustomForm onSubmit={handleSubmit(onSubmit)}>
                {progress === 20 &&
                    <>
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
                    </>
                }
                {
                    progress === 55 && 
                    <>
                        <Input 
                            errors={errors.companyName?.message} 
                            register={register} name={"companyName"} 
                            label={"Nome da empresa"}
                            placeholder="Insira o nome da sua empresa" 
                            type="text"
                        />
                        <Input 
                            errors={errors.cnpj?.message} 
                            register={register} name={"cnpj"} 
                            label={"CNPJ"}
                            placeholder="Insira o cnpj" 
                            type="text"
                        />
                        <Input 
                            errors={errors.companyEmail?.message} 
                            register={register} name={"companyEmail"} 
                            label={"Email institucional"}
                            placeholder="Insira o email" 
                            type="text"
                        />
                        <Input 
                            errors={errors.companyPhone?.message} 
                            register={register} name={"companyPhone"} 
                            label={"Telefone institucional"}
                            placeholder="Insira seu Telefone institucional" 
                            type="text"
                        />
                    
                    </>
                }
                {
                    progress === 99 && 
                    <>
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
                    </>
                }
                {
                    progress === 100 && console.log(user)
                }
                <DivButton>
                    <button type="submit">Próximo passo <AiOutlineArrowRight/> </button>

                </DivButton>

                </CustomForm>
        </FormBox>
            
        </CustomMain>
    )
}

export default Register