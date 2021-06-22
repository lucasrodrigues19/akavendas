import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/dashboard" >
                    <Dashboard></Dashboard>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes