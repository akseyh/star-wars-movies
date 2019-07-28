import React from 'react';
import { Spinner, Card } from 'react-bootstrap';

class Peoples extends React.Component {
    state = {
        peoples: []
    }

    async componentDidMount() {
        const axios = require('axios');
        // for all api page
        for(let page=1; page<10; page++){
            const res = await axios.get("https://swapi.co/api/people/?page=" + page);
            this.setState(prevState => ({ 
                peoples: [...prevState.peoples, ...res.data.results] 
            }));
        }
    }

    render() {
        const { peoples } = this.state;
        return (
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center" }}>

                { peoples.length ? peoples.map((people, index) => 
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
                            {people.name}
                        </Card.Header>
                        <Card.Body className="cardDetail" style={{display: "none"}}>
                            <Card.Text>
                                <span style={{color: "#F5D63C"}}>Height:</span> {people.height},
                                <span style={{color: "#F5D63C"}}> Birth Year:</span> {people.birth_year}, 
                                <span style={{color: "#F5D63C"}}> Eye Color:</span> {people.eye_color}, 
                                <span style={{color: "#F5D63C"}}> Hair Color</span> {people.hair_color}, 
                                <span style={{color: "#F5D63C"}}> Skin Color:</span> {people.skin_color}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) 
                    : <Spinner animation="grow"
                />}
            </div>
        );
    }
}

export default Peoples;