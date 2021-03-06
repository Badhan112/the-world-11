import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './TeamMember.css';

const TeamMember = (props) => {
    const {name, club, country, position, salary, img} = props.teamMember;
    return (
        <div className="teamMember">
            <img className="teamMember-image" src={img} alt=""/>
            <div className="teamMember-info">
                <h5>{name} ({club}, {country})</h5>
                <p>{position}</p>
                <p>Salary: {salary} Million</p>
            </div>
            <Button variant="danger" onClick={() => props.removePlayer(props.teamMember.id)}><FontAwesomeIcon icon={faWindowClose} /> Cancle</Button>
        </div>
    );
};

export default TeamMember;