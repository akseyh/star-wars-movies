import React from 'react';

class Movies extends React.Component {
    state = {
        movies: [{
            episodeId: Number,
            title: String,
        }]
    }

    getMoviesList() {
        fetch("https://swapi.co/api/films/?format=json")
            .then((response) => response.json() )
            .then((movies) => movies.results )
            .then((moviesList) => {
                moviesList.forEach(item => {
                    console.log(item);
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        this.getMoviesList();
        console.log(this.state);
        return (
            <div>Movies</div>
        );
    }
}

export default Movies;