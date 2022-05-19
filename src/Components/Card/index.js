import { HamburgerMenu, LiCard } from "./style"
import matchImg from "../../assets/match.svg"
import user from "../../assets/user.png"
import { useMatch } from "../../Providers/Match"

const Card = ({match}) =>{

    const {loggedUser, getMatch, acceptMatch, refuseMatch} = useMatch()

    const {img,about,name,lastName, id} = match

    return(
        <>
        <LiCard>
            {img === '' ? <img src={user} alt="foto-perfil"/> : <img src={img} alt="foto-perfil"/> }
            
            <h3>{name} {lastName}</h3>
            {about === '' ? <p>usuário sem descrição</p> : <p>{about}</p> }
            <div>
                <button onClick={()=> refuseMatch(id)}>X</button>
                <button><HamburgerMenu/></button>
                <button onClick={()=> acceptMatch(id)}><img src={matchImg}/></button>
            </div>
        </LiCard>
        </>
    )
}

export default Card