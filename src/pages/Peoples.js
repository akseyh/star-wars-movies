import React from 'react';
import PeopleItem from '../components/PeopleItem';
import {Spinner} from 'react-bootstrap';

class Peoples extends React.Component {
    state = {
        peoples: []
    }

    getPeoplesList() {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/people/?format=json")
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        this.getPeoplesList()
            .then(reply => {
                this.setState({
                    peoples: reply.results
                })
            })
    }

    render() {
        const { peoples } = this.state;
        console.log(peoples);
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {peoples.length 
                ? peoples.map((people, index) => 
                    <PeopleItem
                        key={index} 
                        name={people.name}
                    /> ) 
                : <Spinner animation="grow"/>}
            </div>
        );
    }
}

export default Peoples;