import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, image, linkUrl, size, side, history, match}) => (
    <div className={`${size} ${side} menu-item`}  onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='backgroundImage'
        style={{
            backgroundImage: `url(${image})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div> 
    </div>
);

export default withRouter(MenuItem);