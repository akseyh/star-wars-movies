import React  from 'react';
import {HashRouter, Route} from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Peoples from './pages/Peoples';
import Planets from './pages/Planets';
import Starships from './pages/Starships';

class App extends React.Component {
    render() {
        return(
            <Container>
                <HashRouter>
                    <Col>
                        <Header />
                    </Col>
                    <Col>
                        <Route component={Home} exact path={"/"} />
                        <Route component={Movies} path={"/movies"} />
                        <Route component={MovieDetails} path={"/movie/:id"} /> 
                        <Route component={Peoples} path={"/peoples"} />                                    
                        <Route component={Planets} path={"/planets"} />                          
                        <Route component={Starships} path={"/starships"} />                    
                    </Col>
                </HashRouter>
            </Container>
        );
    }
}

export default App;