import React from 'react';
import { Card } from 'react-bootstrap';


class CardItem extends React.Component {
    render() {
        const {text} = this.props;
        return(
            <Card  
                bg="dark"
                text="white" 
                style={{margin: "2px", width: "20rem", height: "4rem", float: "left"}}
            >
                <Card.Body>
                <Card.Title>{text}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default CardItem;