import React from 'react';
import BossItem from '../../components/boss-item/boss-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectBossItems } from '../../redux/tech-legends/bosses/bosses.selector';

import './bosses.styles.scss';

const Bosses = ({ bosses }) => (
    <div className='bosses-content'>
        {
            bosses.map(({id, ...otherBossProps}) => (
                <BossItem key={id} {...otherBossProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    bosses: selectBossItems
});

export default connect(mapStateToProps)(Bosses);