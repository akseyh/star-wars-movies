import React from 'react';
import {Spinner} from 'react-bootstrap';

import CardItem from '../components/CardItem';

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
                {starships.length 
                ? starships.map((starship, index) => 
                    <CardItem
                        key={index} 
                        text={starship.name}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Starships;