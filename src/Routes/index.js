import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import Application from "../Pages/Application"

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
        <Route path={"/dashboard"}>
            <Dashboard/>
        </Route>
      </Switch>
    </>
  );
}
export default Routes;
