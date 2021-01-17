import React from 'react';

import Gear from '../../assets/icons/gear-icon.svg';

import './error.styles.scss';

const Error = () => (
    <div className='error'>
        <h1 className='heading'>This page seems to have had a mechanical failure</h1>
        <h2>Please excuse us while we fix the problem</h2>
        <div className='gears'>
            <img id='first-gear' src={Gear} alt='first-gear' />
            <img id='second-gear' src={Gear} alt='second-gear' />
        </div>
    </div>
);

export default Error;