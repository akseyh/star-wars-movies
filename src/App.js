import React  from 'react';
import { HashRouter } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import './css/index.css';

import Header from './components/Header';
import Routes from './components/Routes';

class App extends React.Component {
    render() {
        return(
            <Container>
                <HashRouter>
                    <Col>
                        <Header />
                    </Col>
                    <Col>
                        <Routes />               
                    </Col>
                </HashRouter>
            </Container>
        );
    }
}

export default App;