import React from 'react';
import StarshipItem from '../components/StarshipItem'
import {Spinner} from 'react-bootstrap';

class Starships extends React.Component {
    state = {
        starships: []
    }

    getStarshipsList(page) {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/starships/?page=" + page)
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        for(let i=1; i<5; i++){
            this.getStarshipsList(i)
            .then(reply => {
                this.setState(prevState => ({
                    starships: [...prevState.starships, ...reply.results]
                }))
            })
        }
    }

    render() {
        const { starships } = this.state;
        console.log(starships);
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {starships.length 
                ? starships.map((starship, index) => 
                    <StarshipItem
                        key={index} 
                        name={starship.name}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Starships;