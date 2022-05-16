import { useForm } from "react-hook-form"
import Input from "../../Components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CustomDiv, CustomForm, CustomMain, Logo , CustomLinearProgress, CustomBox, CustomText, FormBox, DivButton, DivEndereco, DivImg} from "./style"
import logo from "../../assets/Vector.svg"
import Select from "../../Components/Select"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useEffect, useState } from "react"
import Button from "../../Components/Button"
import img from "../../assets/image2.jpg"
import { useHistory } from "react-router-dom"
import { api } from "../../Services/api"
import { toast } from "react-toastify"

const Register = () =>{

    const [progress, setProgress] = useState(20)
    const [user, setUser] = useState({})
    const history = useHistory()

    const schema = yup.object().shape({
        name:yup.string().required("Preencha o campo").trim(),
        lastName:yup.string().required("Preencha o campo").trim(),
        cpf:yup.string().required("Preencha o campo").min(11,"Insira um cpf valido").trim(),
        email:yup.string().email("Email inválido").required("Preencha o campo").trim(),
        phone:yup.string().required("Preencha o campo").trim(),
    })

    const schema2 = yup.object().shape({
        companyName:yup.string().required("Preencha o campo").trim(),
        cnpj:yup.string().required("Preencha o campo").min(14,"Insira um cnpj valido").trim(),
        companyPhone:yup.string().required("Preencha o campo").trim(),
        companyEmail:yup.string().email("Email inválido").required("Preencha o campo").trim(),
        street:yup.string().required("Preencha o campo").trim(),
        district:yup.string().required("Preencha o campo").trim(),
        number:yup.string().required("Preencha o campo").trim(),
        city:yup.string().required("Preencha o campo").trim(),
        cep:yup.string().required("Preencha o campo").trim(),
        uf:yup.string().required("Preencha o campo").trim(),
    })

    const schema3 = yup.object().shape({
        password:yup.string().required("Preencha o campo").trim(),
        confirmPassword:yup.string().required("Preencha o campo").oneOf([yup.ref('password')], 'Senhas diferentes').trim(),
        companyType:yup.string().required("Preencha o campo").trim(),
    })

    const {register, handleSubmit,formState:{errors}} = useForm({
            resolver:yupResolver((progress === 20 && schema) || (progress === 55 && schema2) || (progress === 99 && schema3))
    })

    //useEffect(()=>{
        //resolver essa gambiarra
       // if(user.password){
           // postUser()
       // }
   // },[progress])
   const postUser = () =>{
           api.post("/register",user)
           .then(res => {
               toast.success('Conta Criada com sucesso!')
               setProgress(100)
           })
           .catch(err =>{
               toast.error('Ops! Algo deu errado')
               setUser({})
               setProgress(20)
           })
   }

    const onSubmit = (data) =>{
        if(progress === 20){
            setUser(data)
            setProgress(55)
        }else if(progress === 55){
            const {companyName,companyEmail,companyPhone,cnpj,street,district,number,city,cep,uf} = data
            setUser({...user,
                companyName: companyName,
                companyEmail: companyEmail,
                companyPhone:companyPhone,
                cnpj: cnpj,
                address:{street: street, district:district, number:number, city:city, cep:cep, uf:uf}
            })
            setProgress(99)
        }else if(progress === 99){
            const {password, confirmPassword, companyType} = data
            setUser({...user, password:password, confirmPassword: confirmPassword, companyType: companyType, type:"company", matches: []})
            //postUser()   não funciona o state é assincrono
            if(user.password){
                postUser()
            }
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
                { progress !== 100 ? 
                <CustomForm onSubmit={handleSubmit(onSubmit)} progress={progress}>
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
                                label={"CPF"}
                                placeholder="Insira seu CPF" 
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
                                type="number"
                            />
                            <Input 
                                errors={errors.companyEmail?.message} 
                                register={register} name={"companyEmail"} 
                                label={"Email institucional"}
                                placeholder="Insira o email institucional" 
                                type="email"
                            />
                            <Input 
                                errors={errors.companyPhone?.message} 
                                register={register} name={"companyPhone"} 
                                label={"Telefone da empresa"}
                                placeholder="Insira o Telefone da empresa" 
                                type="text"
                            />
                        <section>
                            <p>Endereco</p>
                            <DivEndereco>
                                <input placeholder="Rua"  
                                errors={errors.street?.message} 
                                {...register("street")} type="text"/>
                            
                                <input placeholder="Bairro"  
                                errors={errors.district?.message} 
                                {...register("district")} type="text"/>
                            
                                <input placeholder="Número"  
                                errors={errors.number?.message} 
                                {...register("number")} type="number"/>
                                
                                <input placeholder="Cidade"  
                                errors={errors.city?.message} 
                                {...register("city")} type="text"/>
                                
                                <input placeholder="CEP"  
                                errors={errors.cep?.message} 
                                {...register("cep")} type="number"/>

                                <input placeholder="UF"  
                                errors={errors.uf?.message} 
                                {...register("uf")} type="text"/>
                            </DivEndereco>
                        </section>
                        
                        </>
                    }
                    {
                        progress === 99 && 
                        <>
                            <Input 
                                errors={errors.companyType?.message} 
                                register={register} name={"companyType"} 
                                label={"Qual o ramo de atuação da sua empresa"}
                                placeholder="insira o ramo" 
                                type="text"
                            />
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
                    {progress >= 99 ? 
                    <Button white>Finalizar</Button>
                    :
                    <DivButton>
                        <button type="submit">Próximo passo <AiOutlineArrowRight/> </button>
                    </DivButton>
                }
                </CustomForm>
                :
                <DivImg>
                    <img src={img} alt="cadasto-realizado"/>
                    <h3>Cadastro Realizado com sucesso!</h3>
                    <Button onClick={()=> history.push("/login")}>Login</Button>
                </DivImg>
                }
        </FormBox>
            
        </CustomMain>
    )
}

export default Register