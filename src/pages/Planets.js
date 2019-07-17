import React from 'react';
import PlanetItem from '../components/PlanetItem'
import {Spinner} from 'react-bootstrap';

class Planets extends React.Component {
    state = {
        planets: []
    }

    getPlanetsList(page) {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/planets/?page=" + page)
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        for(let i=1; i<8; i++){
            this.getPlanetsList(i)
            .then(reply => {
                this.setState(prevState => ({ 
                    planets: [...prevState.planets, ...reply.results] 
                }));
            })
        } 
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