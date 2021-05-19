import React from 'react';

import './constructor-item.styles.scss';

const ConstructorItem = ({ team, founders, wcc, image }) => (
    <div className={`${team} team-item`}>
        <h2 className='constructor-title'>{team.toUpperCase()}</h2>
        <div className='flip-card'>
            <div className='flip-front'>
                <div className='team-image' style={{
                backgroundImage: `url(${image})`
                }}
                />
            </div>
            <div className='flip-back'>
                <h2>{team.toUpperCase()}</h2>
                <h3>Founder(s): {founders}</h3>
                <h3>Championships: {wcc}</h3>
            </div>
        </div>
    </div>
);

export default ConstructorItem;