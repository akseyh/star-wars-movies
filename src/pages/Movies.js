import React from 'react';
import MovieItem from '../components/MovieItem';
import {Spinner} from 'react-bootstrap';

class Movies extends React.Component {
    state = {
        movies: []
    }

    getMoviesList() {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/films/?format=json")
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        this.getMoviesList()
            .then(reply => {
                this.setState(prevState => ({ 
                    movies: [...prevState.movies, ...reply.results] 
                }));
            })
    }

    render() {
        const { movies } = this.state;
        console.log(movies);
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {movies.length 
                ? movies.map((movie, index) => 
                    <MovieItem
                        key={index} 
                        title={movie.title}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Movies;