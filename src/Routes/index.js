import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Register from "../Pages/Register";

import AddIdea from "../Pages/AddIdea";

import Login from "../Pages/Login";
import InvestRegister from "../Pages/InvestRegister";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}></Route>
        <Route exact path={"/cadastro"}>
          <Register />
        </Route>
        <Route path={"/adicionar-ideia"}>
          <AddIdea />
        </Route>
        <Route path={"/cadastro/investidor"}>
          <InvestRegister />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
