import React from 'react';

import './card-item.styles.scss';

const CardItem = ({ name, championships, seasons, image }) => (
    <div className='card-item'>
        <h2 className='name'>{name.toUpperCase()}</h2>
        <div className='backgroundImage' style={{
            backgroundImage: `url(${image})`
            }}
        >
            <div className='driver-info'>
                <p>WDC Titles: {championships}</p>
                <p>Winning Seasons: {seasons}</p>
            </div>
        </div>
    </div>
);

export default CardItem;