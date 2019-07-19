import React from 'react';
import PeopleItem from '../components/PeopleItem';
import {Spinner} from 'react-bootstrap';

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
                    <PeopleItem
                        key={index} 
                        name={people.name}
                        id={index+1}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Peoples;