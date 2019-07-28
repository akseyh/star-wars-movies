import React from 'react';
import { Spinner, Card } from 'react-bootstrap';

class Starships extends React.Component {
    state = {
        starships: []
    }

    async componentDidMount() {
        const axios = require('axios');
        // for all api page
        for(let page=1; page<5; page++){
            const res = await axios.get("https://swapi.co/api/starships/?page=" + page);
            this.setState(prevState => ({ 
                //api format is res.data.results
                starships: [...prevState.starships, ...res.data.results] 
            }));
        }
    }

    render() {
        const { starships } = this.state;
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {starships.length ? starships.map((starship, index) => 
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
                    onClick={() => {
                        let isDivVisible = document.getElementsByClassName('cardDetail')[{index}.index].style.display === "none" ? 1 : 0;
                        let newDisplay = isDivVisible ? "block" : "none" 
                        document.getElementsByClassName('cardDetail')[{index}.index].style.display = newDisplay;
                    }
                    }
                    >
                        <Card.Header> {starship.name} </Card.Header>
                        <Card.Body className="cardDetail" style={{display: "none"}}>
                            <Card.Text>
                                <span style={{color: "#F5D63C"}}>Model:</span> {starship.model}, 
                                <span style={{color: "#F5D63C"}}> Passengers:</span> {starship.passengers}, 
                                <span style={{color: "#F5D63C"}}> Cargo Capacity:</span> {starship.cargo_capacity}, 
                                <span style={{color: "#F5D63C"}}> Length:</span> {starship.length}, 
                                <span style={{color: "#F5D63C"}}> Consumables:</span> {starship.consumables}, 
                                <span style={{color: "#F5D63C"}}> MGLT:</span> {starship.MGLT}, 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Starships;