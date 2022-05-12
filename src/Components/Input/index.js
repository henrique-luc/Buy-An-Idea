import { CustomInput, CustomLabel } from "./style"

const Input = ({register,errors, label, name, ...rest}) =>{
    return (
        <>
        <CustomLabel>
            <p>{label}</p>
            <CustomInput 
            errors={!!errors} 
            {...register(name)} 
            {...rest}
            />
        </CustomLabel>
        </>
    )
}

export default Input