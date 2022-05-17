import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import InvestRegister from "../Pages/InvestRegister";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}></Route>
        <Route exact path={"/cadastro"}>
          <Register />
        </Route>
        <Route path={"/cadastro/investidor"}>
          <InvestRegister />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/dashboard"}>
            <Dashboard/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
