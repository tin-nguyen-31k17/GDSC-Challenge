import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movie from './Database/Movie';
import Result from './SearchFunctions/Result';
import Info from './Database/Info';

const Home = props => (
    <Switch>
        <Route exact path="/" component={Movie}/>
        <Route path="/movies/:id" component={Result}/>
        <Route path="/movieinfo/:id" component={Info}/>
    </Switch>
);

export default Home;