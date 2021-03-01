import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, club, country, position, salary, img} = props.player;
    return (
        <div className="player-info">
            <img className="player-image" src={img} alt=""/>
            <h2>{name}</h2>
            <h4><small>Position:</small> {position}</h4>
            <p><small>Club:</small> {club}, <small>Country:</small> {country}</p>
            <p><small>Salary:</small> ${salary} Million</p>
            <button onClick={() => props.addBtnEventHandler(props.player)}>Add</button>
        </div>
    );
};

export default Player;