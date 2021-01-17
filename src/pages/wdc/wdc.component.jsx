import React from 'react';
import CardItem from '../../components/card-item/card-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWDCDrivers } from '../../redux/wdc/wdc.selector';

import './wdc.styles.scss';

const WDC = ({ drivers }) => (
    <div className='page-content'>
        <h1 className='title'>F1 World Drivers' Champions</h1>
        {
            drivers.map(({id, ...otherDriverProps}) => (
                <CardItem key={id} {...otherDriverProps} />
            ))
        };
    </div>
);

const mapStateToProps = createStructuredSelector({
    drivers: selectWDCDrivers
});

export default connect(mapStateToProps)(WDC);