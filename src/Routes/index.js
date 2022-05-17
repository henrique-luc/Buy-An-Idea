import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
// import InvestRegister from "../Pages/InvestRegister";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application";

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>
				<Route path={"/cadastro"}>
					<RegisterPage />
				</Route>
				<Route path={"/login"}>
					<Login />
				</Route>
				<Route path={"/aplicacao"}>
					<Application />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
