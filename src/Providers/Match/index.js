import { useCallback, useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const MatchContext = createContext()

export const MatchProvider = ({children}) =>{
    
    const [loggedUser, setLoggedUser] = useState({})

    const getMatch = useCallback(() =>{
        const {user,accessToken} = JSON.parse(localStorage.getItem("@buyAnIdea:Login"))
        
        const {id} = user

        api.get(`/users/${id}`,{
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(res =>{
            setLoggedUser(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const acceptMatch = (userId) =>{
        const {user,accessToken} = JSON.parse(localStorage.getItem("@buyAnIdea:Login"))

        const {id, email, password} = user

        const {contacts} = loggedUser
        const accept = loggedUser.matches.filter(match => match.id === userId)
        const pending = loggedUser.matches.filter(match => match.id !== userId)

        api.patch(`/users/${id}`,{matches: pending, contacts: [...contacts,...accept]},{
            headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              body: {
                userId: id,
                email: email,
                password: password,
              },
        })
        .then((res) => {
            toast.success("Match Realizado");
        })
        .catch((err) => toast.error("Ops! Algo deu errado"));
    }

    return(
        <>
        <MatchContext.Provider value={{loggedUser, getMatch, setLoggedUser,acceptMatch}}>
            {children}
        </MatchContext.Provider>
        </>
    )
}

export const useMatch = () => useContext(MatchContext)