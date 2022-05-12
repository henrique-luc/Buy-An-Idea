import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"

const Routes = () =>{
    return (
        <>
        <Switch>
            <Route exact path={"/"}>
            </Route>
            <Route path={"/cadastro"}>
                
            </Route>
        </Switch>
        </>
    )
}

export default Routes