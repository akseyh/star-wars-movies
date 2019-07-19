import React from 'react';

class MovieDetails extends React.Component {
    state = {
        movie: {},
        id: {
            1:  4,
            2:  5,
            3:  6,
            4:  1,
            5:  2,
            6:  3,
            7:  7
        }
    }

    async componentDidMount() {
        const axios = require('axios');
        const episodeId = this.props.match.params.id;
        const id = this.state.id[episodeId]
        const res = await axios.get('https://swapi.co/api/films/' + id + '?format=json')
        this.setState({ 
            movie: res.data
        });
    }
    
    render() {
        const { title, director, opening_crawl } = this.state.movie;
        return (
            <div style={{marginTop: "10px"}}>
                <h3>{title}</h3>
                <h4>{director}</h4>
                <h6>{opening_crawl}</h6>
            </div>
        );
    }
}

export default MovieDetails;