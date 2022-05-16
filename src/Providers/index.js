import { LoginProvider } from "./Login"
import { RegisterProvider } from "./Register"

const Providers = ({children}) =>{
    return(
        <>
        <RegisterProvider>
            <LoginProvider>
                {children}
            </LoginProvider>
        </RegisterProvider>
        </>
    )
}

export default Providers