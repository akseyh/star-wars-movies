import React from 'react';
import { Spinner, Card } from 'react-bootstrap';

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
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center" }}>

                    {movies.length 
                    ? movies.map((movie, index) =>
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
                            }}
                        > 
                            {movie.title} 
                        </Card.Header>
                        <Card.Body className="cardDetail" style={{display: "none"}}>
                            <Card.Text>{movie.opening_crawl}</Card.Text>
                            <Card.Text>
                                <span style={{color: "#F5D63C"}}>Director:</span> {movie.director},
                                <span style={{color: "#F5D63C"}}> Producer:</span> {movie.producer}
                            </Card.Text>
                            

                        </Card.Body>
                    </Card>
                    )
                    : <Spinner animation="grow"/>}
                </div>
        );  
    }
}

export default Movies;