import { CustomButton } from "./style"

const Button = ({children, white, ...rest}) =>{
    return (
        <>
        <CustomButton {...rest} white={white}>{children}</CustomButton>
        </>
    )
}

export default Button