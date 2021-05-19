import React from 'react';

import './car-item.styles.scss';

const CarItem = ({ car, designer, races, wins, wcc, wdc, seasons, image }) => (
    <div className='car-item'>
        <h2 className='car-name'>{car.toUpperCase()}</h2>
        <div className='car'>
            <div className='car-image' style={{
                backgroundImage: `url(${image})`
                }}>
            </div>
            <div className='car-info'>
                <p>Designers: {designer}</p>
                <p>Races: {races}</p>
                <p>Wins: {wins}</p>
                <p>Constructors' Championships: {wcc}</p>
                <p>Drivers' Champtionships: {wdc}</p>
                <p>Seasons: {seasons}</p>
            </div>
        </div>
    </div>
);

export default CarItem;

// https://wallpapercave.com/wp/wp4800159.jpg