import React from 'react';
import ReactDOM from 'react-dom';
import {Container,Jumbotron} from 'react-bootstrap'
import "../styles/welcomeInfo.css"

const WelcomeInfo = () => {
    return(
        <Container id="info">
            <Jumbotron>
                <h1>Dołącz do Fantasy Ekstraliga już dzisiaj !</h1>
                <p>
                    Tylko chwila dzieli cię od stworzenia własnej drużyny żużlowej. 
                    <br/>
                    Dzięki Fantasy Ekstraliga będziesz 
                    mógł/mogła poczuć się jak prawdziwy menadżer żużlowy.
                </p>
                    <hr className="my-4" />
                <p>
                    Podczas gry będziesz :
                    <ul>
                        <li>Dokonywać transferów</li>
                        <li>Rozsądnie dysponować budżetem</li>
                        <li>Rywalizować ze znajomymi</li>
                        <li>Obserwować poczynania twoich zawodników na stadionach w całej Polsce</li>
                    </ul>
                </p>

                </Jumbotron>
        </Container>
    )
}

export default WelcomeInfo;