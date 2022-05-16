import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import InvestRegister from "../Pages/InvestRegister";

const Routes = () => {
<<<<<<< HEAD
	return (
		<>
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>
				<Route path={"/cadastro"}>
					<Register />
				</Route>
				<Route path={"/login"}>
					<Login />
				</Route>
			</Switch>
		</>
	);
=======
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
      </Switch>
    </>
  );
>>>>>>> developer
};

export default Routes;
