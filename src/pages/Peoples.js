import React from 'react';
import {Spinner} from 'react-bootstrap';

import CardItem from '../components/CardItem'

class Peoples extends React.Component {
    state = {
        peoples: []
    }

    async componentDidMount() {
        const axios = require('axios');
        // for all api page
        for(let page=1; page<10; page++){
            const res = await axios.get("https://swapi.co/api/people/?page=" + page);
            this.setState(prevState => ({ 
                peoples: [...prevState.peoples, ...res.data.results] 
            }));
        }
    }

    render() {
        const { peoples } = this.state;
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {peoples.length 
                ? peoples.map((people, index) => 
                    <CardItem
                        key={index} 
                        text={people.name}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Peoples;