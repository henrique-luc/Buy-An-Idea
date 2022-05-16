import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const LoginContext = createContext()

export const LoginProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@buyAnIdea:Login")) || {})
    const history = useHistory()

    const userLogin = (userData) =>{
        api.post("/login", userData)
        .then(response =>{
            setUser(userData)
            localStorage.setItem("@buyAnIdea:Login", JSON.stringify(response.data))
            toast.success("Login Realizado")
            history.push('/dashboard')
        })
        .catch(err =>{
            toast.error("Email ou senha Incorreto")
        })
    }

    return(
        <LoginContext.Provider value={{user,userLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)