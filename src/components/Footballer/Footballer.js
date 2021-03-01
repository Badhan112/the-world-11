import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Footballer.css';


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

    return (
        <div className="footballer-area">
            <div className="players-area">
                {
                    players.map(player => <Player player={player} addBtnEventHandler={addBtnEventHandler} key={player.id}></Player>)
                }
            </div>
            <Team team={team}></Team>
        </div>
    );
};

export default Footballer;