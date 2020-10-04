import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Registre from './pages/registre';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/registre" exact component={Registre}></Route>
        </BrowserRouter>
    )
}

export default Routes;