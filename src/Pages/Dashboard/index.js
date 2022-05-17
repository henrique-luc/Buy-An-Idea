import Card from "../../Components/Card"
import pitou from "../../assets/pitou.jpg"
import { BiUser, BsChat, CustomMain, Footer, HamburgerMenu, MatchesUl, Title } from "./style"

const Dashboard = () =>{
    return (
        <>
        <CustomMain>
        <Title>Investidores interessados na sua ideia</Title>
        <MatchesUl>
        <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
        <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
        <Card img={pitou} name="Pitou" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque amet nibh ultrices neque."}/>
        </MatchesUl>
        <Footer>
            <div>
                <BiUser/>
            </div>
            <BsChat/>
            <HamburgerMenu/>
        </Footer>
        </CustomMain>
        </>
    )
}

export default Dashboard