import React from 'react';

import './innovator-item.styles.scss';

const InnovatorItem = ({name, teams, wcc, wdc, image, teamColour}) => (
    <div className={`${teamColour} innovator-item`}>
        <div className='backgroundImage' style={{
            backgroundImage: `url(${image})`
            }} 
        />
        <div className='innovator-info'>
            <h3 className='innovator-name'>{name}</h3>
            <p>Teams: {teams}</p>
            <p>Constructors' Championships: {wcc}</p>
            <p>Drivers' Championships: {wdc}</p>
        </div>
    </div>
);

export default InnovatorItem;