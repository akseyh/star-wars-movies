import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'

class MovieDetails extends React.Component {
    state = {
        movie: {},
        id: {
            1:  4,
            2:  5,
            3:  6,
            4:  1,
            5:  2,
            6:  3,
            7:  7
        }
    }

    async componentDidMount() {
        const axios = require('axios');
        const episodeId = this.props.match.params.id;
        const id = this.state.id[episodeId]
        const res = await axios.get('https://swapi.co/api/films/' + id + '?format=json')
        this.setState({ 
            movie: res.data
        });
    }
    
    render() {
        const { title, director, opening_crawl } = this.state.movie;
        return (
            <div style={{marginTop: "10px"}}>
                <h3>{title}</h3>
                <h4>{director}</h4>
                <h6>{opening_crawl}</h6>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                            Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Link 2
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default MovieDetails;