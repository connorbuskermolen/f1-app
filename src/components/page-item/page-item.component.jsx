import React from 'react';
import { withRouter } from 'react-router-dom';
import './page-item.styles.scss';

const PageItem = ({ title, side, image, linkUrl, match, history}) => (
    <div className={`${side} page-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='backgroundImage'
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className='content'>
                <h2 className='title'>{title.toUpperCase()}</h2>
            </div>
        </div>
    </div>
);

export default withRouter(PageItem);