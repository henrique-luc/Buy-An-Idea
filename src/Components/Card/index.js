import { HamburgerMenu, LiCard } from "./style"
import match from "../../assets/match.svg"

const Card = ({img,name, description}) =>{
    return(
        <>
        <LiCard>
            <img src={img} alt="foto-perfil"/>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
                <button>X</button>
                <button><HamburgerMenu/></button>
                <button><img src={match}/></button>
            </div>
        </LiCard>
        </>
    )
}

export default Card