import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {
    render() {
        const { data } = this.props;
        return(
            <Link to={'/movie/' + data.episode_id}>
                <Card  
                    bg="dark"
                    text="white" 
                    style={{margin: "5px", width: "10rem", height: "10rem", float: "left"}}
                >
                    <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        );
    }
}

export default MovieItem;