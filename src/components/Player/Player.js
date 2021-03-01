import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name, club, country, position, salary, img} = props.player;
    return (
        <div className="player-info">
            <img className="player-image" src={img} alt=""/>
            <h2>{name}</h2>
            <h4><small>Position:</small> {position}</h4>
            <p><small>Club:</small> {club}, <small>Country:</small> {country}</p>
            <p><small>Salary:</small> ${salary} Million</p>
            <Button onClick={() => props.addBtnEventHandler(props.player)} variant="dark"><FontAwesomeIcon icon={faUserPlus} /> Add</Button>
        </div>
    );
};

export default Player;