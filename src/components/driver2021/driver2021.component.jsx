import React from 'react';

import './driver2021.styles.scss';

const DriverItem = ({ name, number, team, country, wins, podiums, championships, imageUrl, poles, fLaps, colour }) => (

    <div className={`${colour} driver-item-2021`}>
        <div className='driver-details-2021'>
            <h2 className='driver-name-2021'>{name.toUpperCase()} {number}</h2>
            <img src={country} alt='driver country' />
        </div>
        <h2 className='team'>{team.toUpperCase()}</h2>
        <div className='backgroundImage' style={{
        backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='driver-info-2021'>
            <p>Championships: {championships}</p>
            <p>Wins: {wins}</p>
            <p>Podiums: {podiums}</p>
            <p>Poles: {poles}</p>
            <p>Fastest Laps: {fLaps}</p>
        </div>

    </div>
);

export default DriverItem;