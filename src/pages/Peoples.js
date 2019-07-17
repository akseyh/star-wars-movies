import React from 'react';
import PeopleItem from '../components/PeopleItem';
import {Spinner} from 'react-bootstrap';

class Peoples extends React.Component {
    state = {
        peoples: []
    }

    getPeoplesList(page) {
        return new Promise((resolve, reject) => {
            fetch("https://swapi.co/api/people/?page=" + page)
                .then(reply => resolve(reply.json()))
        })
    }
    
    componentWillMount() {
        for(let i=1; i<10; i++){
            this.getPeoplesList(i)
            .then(reply => {
                this.setState(prevState => ({ 
                    peoples: [...prevState.peoples, ...reply.results] 
                }));
            })
        } 
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