import React from 'react';

import './boss-item.styles.scss';

const BossItem = ({ name, wcc, wdc, teams, image, teamColour }) => (
    <div className={`${ teamColour} boss-item`}>
        <div className='backgroundImage' style={{
            backgroundImage: `url(${image})`
            }} 
        />
        <div className='boss-info'>
            <h3 className='boss-name'>{name}</h3>
            <p>Teams: {teams}</p>
            <p>Constructors' Championships: {wcc}</p>
            <p>Drivers' Championships: {wdc}</p>
        </div>
    </div>
);

export default BossItem;