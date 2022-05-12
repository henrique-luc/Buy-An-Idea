import { CustomSelect } from "./style"

const Select = ({register,children,name, title}) =>{
    return(
        
        <CustomSelect>
            <p>{title}</p>
            <select {...register(name)}>
            {children}
            </select>
        </CustomSelect>
        
        
    )
}

export default Select