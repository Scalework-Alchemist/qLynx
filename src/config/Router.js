import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/homepage,/HomePage';
import About from  '../pages/about,/About';
import PageNotFound from '../pages/PageNotFound';
import StorePage from '../pages/store/StorePage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/store' component={StorePage}/>
        <Route component={PageNotFound}/>
    </Switch>
)

export default Router;