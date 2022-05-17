import { LoginProvider } from "./Login"
import { MatchProvider } from "./Match"
import { RegisterProvider } from "./Register"

const Providers = ({children}) =>{
    return(
        <>
        <RegisterProvider>
            <LoginProvider>
                <MatchProvider>
                    {children}
                </MatchProvider>
            </LoginProvider>
        </RegisterProvider>
        </>
    )
}

export default Providers