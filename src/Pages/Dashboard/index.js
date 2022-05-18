import Card from "../../Components/Card"
import pitou from "../../assets/pitou.jpg"
import { BiUser, BsChat, CustomDiv, CustomMain, Footer, HamburgerMenu, MatchesUl, Title } from "./style"
import Menu from "../../Components/Menu"
import { useEffect} from "react"
import { useMatch } from "../../Providers/Match"

const Dashboard = () =>{

    const {loggedUser, getMatch} = useMatch()

    const {matches} = loggedUser
 
    useEffect(()=>{
        getMatch()
    },[matches])

    return (
        <>
        <CustomMain>
                <Menu/>
            <CustomDiv>
                <Title>Investidores interessados na sua ideia</Title>
                <MatchesUl>
                    {matches&&matches.map( match => <Card key={match.id} match={match}/>)}
                </MatchesUl>
            </CustomDiv>
        </CustomMain>
        <Footer>
            <div>
                <BiUser/>
            </div>
            <BsChat/>
            <HamburgerMenu/>
        </Footer>
        </>
    )
}

export default Dashboard