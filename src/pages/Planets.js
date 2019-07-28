import React from 'react';
import { Spinner, Card } from 'react-bootstrap';

class Planets extends React.Component {
    state = {
        planets: []
    }

    async componentDidMount() {
        const axios = require('axios');
        // for all api page
        for(let page=1; page<8; page++){
            const res = await axios.get("https://swapi.co/api/planets/?page=" + page);
            this.setState(prevState => ({ 
                //api format is res.data.results
                planets: [...prevState.planets, ...res.data.results] 
            }));
        }
    }

    render() {
        const { planets } = this.state;
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {planets.length ? planets.map((planet, index) => 
                    <Card  
                    bg="dark"
                    text="white" 
                    key={index}
                    style={{ 
                        margin: "2px",
                        width: "100%",
                        height: "auto",
                        border: "1px solid black",
                    }}
                    >
                        <Card.Header
                        onClick={() => {
                            let isDivVisible = document.getElementsByClassName('cardDetail')[{index}.index].style.display === "none" ? 1 : 0;
                            let newDisplay = isDivVisible ? "block" : "none" 
                            document.getElementsByClassName('cardDetail')[{index}.index].style.display = newDisplay;
                        }} >
                            {planet.name} </Card.Header>
                        <Card.Body className="cardDetail" style={{display: "none"}}>
                            <Card.Text>
                                <span style={{color: "#F5D63C"}}>Rotation Period:</span> {planet.rotation_period}, 
                                <span style={{color: "#F5D63C"}}> Orbital Period:</span> {planet.orbital_period}, 
                                <span style={{color: "#F5D63C"}}> Diameter:</span> {planet.diameter}, 
                                <span style={{color: "#F5D63C"}}> Climate:</span> {planet.climate}, 
                                <span style={{color: "#F5D63C"}}> Gravity:</span> {planet.gravity},
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Planets;