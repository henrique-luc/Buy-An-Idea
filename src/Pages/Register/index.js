import { useForm } from "react-hook-form"
import Input from "../../Components/Input"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Register = () =>{
    const schema = yup.object().shape({
        name:yup.string().required("Preencha o campo").trim()
    })

    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
        errors={errors.name?.message} 
        register={register} name={"name"} 
        label={"Nome"}
        placeholder="Insira seu nome" 
        type="text"
        />
        <button>teste</button>
        </form>
        </>
    )
}

export default Register