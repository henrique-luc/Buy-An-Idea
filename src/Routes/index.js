import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import EmpreProfile from "../Pages/EmpreProfile";
import InvestProfile from "../Pages/InvestProfile";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application"
import ApplicationContainer from "../Components/ApplicationContainer";
import { AplicationInvestor } from "../Pages/AplicationInvestor";
import AddIdea from "../Pages/AddIdea";

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
				<Route path={"/aplicacao"}>
					<Application />
				</Route>
        <Route exact path={"/perfil"}>
          <ApplicationContainer>
            <EmpreProfile />
          </ApplicationContainer>
        </Route>
        <Route path={"/adicionar-ideia"}>
          <ApplicationContainer>
            <AddIdea />
          </ApplicationContainer>
        </Route>
        <Route path={"/perfil/investidor"}>
          <ApplicationContainer>
            <InvestProfile />
          </ApplicationContainer>
        </Route>
        <Route exact path={"/dashboard"}>
          <ApplicationContainer>
            <Dashboard/>
          </ApplicationContainer>
        </Route>
        <Route path={"/dashboard/investidor"}>
            <ApplicationContainer>
              <AplicationInvestor/>
            </ApplicationContainer>
        </Route>
      </Switch>
    </>
  );
}
export default Routes;
