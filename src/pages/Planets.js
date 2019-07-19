import React from 'react';
import PlanetItem from '../components/PlanetItem'
import {Spinner} from 'react-bootstrap';

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