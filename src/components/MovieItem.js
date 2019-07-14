import React from 'react';
import { Card } from 'react-bootstrap';

class MovieItem extends React.Component {
    render() {
        const {title} = this.props;
        return(
            <Card bg="dark" text="white" style={{marginTop: "5px"}}>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>{openingCrawl}</Card.Text> */}
                </Card.Body>
            </Card>
        );
    }
}

export default MovieItem;