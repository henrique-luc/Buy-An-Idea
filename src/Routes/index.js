import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import Register from "../Pages/Register"

const Routes = () =>{
    return (
        <>
        <Switch>
            <Route exact path={"/"}>
            </Route>
            <Route path={"/cadastro"}>
                <Register/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes