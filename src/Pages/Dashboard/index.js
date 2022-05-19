import Card from "../../Components/Card";
import pitou from "../../assets/pitou.jpg";
import {
  BiUser,
  BsChat,
  CustomDiv,
  CustomMain,
  Footer,
  HamburgerMenu,
  MatchesUl,
  Title,
} from "./style";
import Menu from "../../Components/Menu";
import { useEffect, useState } from "react";
import { useMatch } from "../../Providers/Match";
import { useLogin } from "../../Providers/Login";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Loading from "../../Components/Loading";


const Dashboard = () => {
	const { loggedUser, getMatch, isLoading,setIsLoading } = useMatch();
	const { user } = useLogin();
	const { matches } = loggedUser;

	useEffect(() => {
		getMatch();
	}, [isLoading]);
=======
import ModalSendMessage from "../../Components/ModalSendMessage";

const Dashboard = () => {
  const { loggedUser, getMatch } = useMatch();
  const { user } = useLogin();
  const { matches } = loggedUser;

  useEffect(() => {
    getMatch();
  }, [matches]);
>>>>>>> 1a415f7ee51fe2a98b3e748e85b2142993a4e6e5

  //console.log(loggedUser)
  if (!user) {
    return <Redirect to="/" />;
  }
  if (user.user.type === "investor") {
    return <Redirect to="/dashboard/investidor" />;
  }

<<<<<<< HEAD
	return (
		<>
		{ !isLoading? <Loading/> 
		:
		<>
			<CustomMain>
				<CustomDiv>
					{matches && matches.length === 0 ? (
						<Title>Nenhum Investidor</Title>
					) : (
						<Title>Investidores interessados na sua ideia</Title>
					)}
					<MatchesUl>
						{matches && matches.length === 0 ? (
							<>
								<div>
									<h2>que tal melhorar o seu perfil?</h2>
									<Link to={"/perfil"}>Perfil</Link>
								</div>
							</>
						) : (
							matches &&
							matches.map((match) => (
								<Card key={match.id} match={match} />
							))
						)}
					</MatchesUl>
				</CustomDiv>
			</CustomMain>
			<Footer>
				<div>
					<BiUser />
				</div>
				<BsChat />
				<HamburgerMenu />
			</Footer>
		</>
		}
		</>
	);
=======
  return (
    <>
      <CustomMain>
        <CustomDiv>
          {matches && matches.length === 0 ? (
            <Title>Nenhum Investidor</Title>
          ) : (
            <Title>Investidores interessados na sua ideia</Title>
          )}
          <MatchesUl>
            {matches && matches.length === 0 ? (
              <>
                <div>
                  <h2>Que tal melhorar o seu perfil?</h2>
                  <Link to={"/perfil"}>Perfil</Link>
                  <ModalSendMessage />
                </div>
              </>
            ) : (
              matches &&
              matches.map((match) => <Card key={match.id} match={match} />)
            )}
          </MatchesUl>
        </CustomDiv>
      </CustomMain>
      <Footer>
        <div>
          <BiUser />
        </div>
        <BsChat />
        <HamburgerMenu />
      </Footer>
    </>
  );
>>>>>>> 1a415f7ee51fe2a98b3e748e85b2142993a4e6e5
};

export default Dashboard;
