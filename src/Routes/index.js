import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}></Route>
        <Route path={"/cadastro"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
