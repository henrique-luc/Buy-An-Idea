import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import EmpreProfile from "../Pages/EmpreProfile";
import InvestProfile from "../Pages/InvestProfile";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application";
import ApplicationContainer from "../Components/ApplicationContainer";
import { AplicationInvestor } from "../Pages/AplicationInvestor";
import AddIdea from "../Pages/AddIdea";
import { useLogin } from "../Providers/Login";
import Chat from "../Pages/Chat";

const Routes = () => {
	const { user } = useLogin();
	return (
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>

				<Route path={"/cadastro"}>
					<RegisterPage />
				</Route>

				<Route path={"/aplicacao"}>
					<Application />
				</Route>

				<Route exact path={"/perfil"}>
					{user.type !== "company" ? (
						<ApplicationContainer>
							<InvestProfile />
						</ApplicationContainer>
					) : (
						<ApplicationContainer>
							<EmpreProfile />
						</ApplicationContainer>
					)}
				</Route>

				<Route exact path={"/adicionar-ideia"}>
					<ApplicationContainer>
						<AddIdea />
					</ApplicationContainer>
				</Route>

				<Route exact path={"/dashboard"}>
					<ApplicationContainer>
						<Dashboard />
					</ApplicationContainer>
				</Route>

				<Route path={"/dashboard/investidor"}>
					<ApplicationContainer>
						<AplicationInvestor />
					</ApplicationContainer>
				</Route>

				<Route path={"/conversas"}>
					<ApplicationContainer>
						<Chat />
					</ApplicationContainer>
				</Route>
			</Switch>
		</>
	);
};
export default Routes;
