import React from 'react';
import { Card } from 'react-bootstrap';

class MovieItem extends React.Component {
    render() {
        const {title} = this.props;
        return(
            <Card  
                bg="dark"
                text="white" 
                style={{margin: "5px", width: "10rem", height: "10rem", float: "left"}}
            >
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieItem;