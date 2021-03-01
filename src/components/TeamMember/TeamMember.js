import React from 'react';
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
        </div>
    );
};

export default TeamMember;