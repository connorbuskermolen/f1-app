import React from 'react';
import Innovators from '../../components/innovators/innovators.component';
import Bosses from '../../components/bosses/bosses.component';

import './tech-legends.styles.scss';

const TechLegends = () => (
    <div className='tech-legends-page'>
        <h1 className='title'>Formula 1 Technical Legends</h1>
        <div className='innovators-page'>
            <h2 className='innovators-title'>Innovators/Designers</h2>
            <Innovators />
        </div>
        <div className='bosses-page'>
            <h2 className='bosses-title'>Team Bosses</h2>
            <Bosses />
        </div>
    </div>
);

export default TechLegends;