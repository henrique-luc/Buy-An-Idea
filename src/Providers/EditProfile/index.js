import { createContext, useContext, useState } from "react";
import { api } from "../../Services/api";
import { useLogin } from "../Login";

export const EditProfileContext = createContext()

export const EditProfileProvider = ({children}) =>{
    const {user} = useLogin()
    const [isLoading, setIsLoading] = useState(false)
    const [editUser, setEditUser] = useState(user&&user.user)

    return(
        <>
        <EditProfileContext.Provider value={{editUser, setEditUser,isLoading, setIsLoading}}>
            {children}
        </EditProfileContext.Provider>
        </>
    )
}

export const useEditProfile = () => useContext(EditProfileContext)