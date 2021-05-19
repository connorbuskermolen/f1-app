import React from 'react';
import Directory from '../../components/directory/directory.component';
import HomeContent from '../../components/home-content/home-content.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome To My Formula 1 Website!</h1>
        <Directory />
        <div className='page'>
        <h1>EXPLORE</h1>
        </div>
        <HomeContent />
    </div>
    
);

export default HomePage;