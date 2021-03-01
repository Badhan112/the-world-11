import React from 'react';
import './Team.css'

const Team = (props) => {
    const totalFees = props.team.reduce((total, player) => total + player.salary, 0);
    return (
        <div className="team">
            <div className="team-info">
                <h3>Your Team</h3>
                <h4>Player Selected: {props.team.length}</h4>
                <p>Total Fees: {totalFees} Million</p>
            </div>
            <div className="team-members">

            </div>
        </div>
    );
};

export default Team;