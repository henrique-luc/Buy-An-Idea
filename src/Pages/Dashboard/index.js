import Card from "../../Components/Card"
import pitou from "../../assets/pitou.jpg"
import { BiUser, BsChat, CustomDiv, CustomMain, Footer, HamburgerMenu, MatchesUl, Title } from "./style"
import Menu from "../../Components/Menu"

const Dashboard = () =>{

    return (
        <>
        <CustomMain>
                <Menu/>
            <CustomDiv>
                <Title>Investidores interessados na sua ideia</Title>
                <MatchesUl>
                <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
                <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
                <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
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