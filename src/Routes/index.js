import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application"
import ApplicationContainer from "../Components/ApplicationContainer";
import { AplicationInvestor } from "../Pages/AplicationInvestor";

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
