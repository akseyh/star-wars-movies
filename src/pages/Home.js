import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


function Home () {
    return(
        <Jumbotron>
            <h1>Welcome To Star Wars Movies</h1>
            <p>
            Star Wars is an American epic space-opera media franchise created by George Lucas. 
            The franchise began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.

            The first film, later subtitled Episode IV – A New Hope, was followed by the sequels Episode V – 
            The Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983), forming what is collectively 
            referred to as the original trilogy. A prequel trilogy was later released, consisting of Episode I – 
            The Phantom Menace (1999), Episode II – Attack of the Clones (2002) and Episode III – 
            Revenge of the Sith (2005). Finally, a sequel trilogy began with Episode VII – The Force Awakens (2015), 
            continued with Episode VIII – The Last Jedi (2017), and will conclude with Episode IX – 
            The Rise of Skywalker (2019). The first eight films were nominated for Academy Awards 
            (with wins going to the first two released) and were commercially successful. Together with the 
            theatrical anthology films Rogue One: A Star Wars Story (2016) and Solo: A Star Wars Story (2018), 
            the films combined box office revenue equates to over US$9 billion, and is currently the 
            second-highest-grossing film franchise.
            </p>
            <p>
                <a href="https://en.wikipedia.org/wiki/Star_Wars"><Button variant="primary" >Learn more</Button></a>
            </p>
        </Jumbotron>
    );
}

export default Home;