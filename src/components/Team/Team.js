import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const totalFees = props.team.reduce((total, player) => total + player.salary, 0);
    return (
        <div className="team">
            <div className="team-info">
                <h3><FontAwesomeIcon icon={faUsers} /> Your Team</h3>
                <h4>Player Selected: {props.team.length}</h4>
                <p>Total Fees: {totalFees} Million</p>
            </div>
            <div className="team-members">
                {
                    props.team.map(teamMember => <TeamMember teamMember={teamMember} key={teamMember.id}></TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;