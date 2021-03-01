import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Footballer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footballer = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch("https://api.mocki.io/v1/bc903897")
        .then(res => res.json())
        .then(data => setPlayers(data));
    }, []);

    const [team, setTeam] = useState([]);
    const addBtnEventHandler = (player) =>{
        const newTeam = [...team, player];
        setTeam(newTeam);
    }

    const removePlayer = id =>{
        const newTeam = team.filter(player => player.id !== id)
        setTeam(newTeam);
    }

    return (
        <Container fluid className="footballer-area">
            <Row>
                <Col md={8}>
                    <Row className="players-area">
                        {
                            players.map(player => <Player player={player} addBtnEventHandler={addBtnEventHandler} key={player.id}></Player>)
                        }
                    </Row>
                </Col>
                <Col md={3}>
                    <Team team={team} removePlayer={removePlayer}></Team>
                </Col>
            </Row>
        </Container>
    );
};

export default Footballer;