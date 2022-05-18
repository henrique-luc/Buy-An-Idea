import { HamburgerMenu, LiCard } from "./style"
import matchImg from "../../assets/match.svg"
import img from "../../assets/pitou.jpg"
import { useMatch } from "../../Providers/Match"

const Card = ({match}) =>{

    const {loggedUser, getMatch, acceptMatch, refuseMatch} = useMatch()

    const {name,lastName, id} = match

    return(
        <>
        <LiCard>
            <img src={img} alt="foto-perfil"/>
            <h3>{name} {lastName}</h3>
            <p>"loren ipsum dolor"</p>
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