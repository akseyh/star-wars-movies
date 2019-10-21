import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Peoples from '../pages/Peoples';
import Planets from '../pages/Planets';
import Starships from '../pages/Starships';

class Routes extends React.Component {
    render() {
        return(
            <HashRouter basename="/">
                <Route component={Home} exact path="/" />
                <Route component={Movies} path="/movies" />
                <Route component={Peoples} path="/peoples" />                                    
                <Route component={Planets} path="/planets" />                          
                <Route component={Starships} path="/starships" />  
            </HashRouter>
        )
    }
}

export default Routes;