import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home";
import Detalhes from "./pages/carrinho";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
            </Switch>
        </BrowserRouter>

    )
}