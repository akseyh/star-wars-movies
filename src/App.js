import React  from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Peoples from './pages/Peoples';
import Planets from './pages/Planets';
import Starships from './pages/Starships';

class App extends React.Component {
    render() {
        return(
            <Container>
                <BrowserRouter>
                <Col>
                    <Header />
                </Col>
                <Col>
                    <Route component={Home} path={"/home"} />
                    <Route component={Movies} path={"/movies"} />
                    <Route component={Peoples} path={"/peoples"} />                          
                    <Route component={Planets} path={"/planets"} />                          
                    <Route component={Starships} path={"/starships"} />                          
                </Col>
                </BrowserRouter>
            </Container>
        );
    }
}

export default App;