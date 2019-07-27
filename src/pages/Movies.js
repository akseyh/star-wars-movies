import React from 'react';
import {Spinner} from 'react-bootstrap';

import CardItem from '../components/CardItem'

class Movies extends React.Component {
    state = {
        movies: []
    }

    async componentDidMount() {
        const axios = require('axios');
        const res = await axios.get('https://swapi.co/api/films/?format=json');
        this.setState(prevState => ({ 
            movies: [...prevState.movies, ...res.data.results] 
        }));
    }

    render() {
        const { movies } = this.state;
        return (
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {movies.length 
                    ? movies.map((movie, index) =>
                        <CardItem
                            key={index} 
                            text={movie.title}
                        />)
                    : <Spinner animation="grow"/>}
                </div>
        );  
    }
}

export default Movies;