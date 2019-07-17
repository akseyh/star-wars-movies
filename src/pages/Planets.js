import React from 'react';
import PlanetItem from '../components/PlanetItem'
import {Spinner} from 'react-bootstrap';

class Planets extends React.Component {
    state = {
        planets: []
    }

    getPlanetsList() {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/planets/?format=json")
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        this.getPlanetsList()
            .then(reply => {
                this.setState({
                    planets: reply.results
                })
            })
    }

    render() {
        const { planets } = this.state;
        console.log(planets);
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {planets.length 
                ? planets.map((planet, index) => 
                    <PlanetItem
                        key={index} 
                        name={planet.name}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Planets;