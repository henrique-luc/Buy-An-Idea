import { CustomSelect } from "./style"

const Select = ({register,children,name, defaultValue, title}) =>{
    return(
        
        <CustomSelect>
            <p>{title}</p>
            <select defaultValue={defaultValue} {...register(name)}>
            {children}
            </select>
        </CustomSelect>
        
        
    )
}

export default Select