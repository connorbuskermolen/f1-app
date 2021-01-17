import React from 'react';
import DriverItem from '../../components/driver2021/driver2021.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select2021Drivers } from '../../redux/2021/drivers/drivers.selector';

import './drivers2021.styles.scss';

const Drivers2021 = ({ drivers }) => (
    <div className='page-content-2021'>
        <h1 className='title'>Formula 1 2021 Driver Lineup</h1>
        {
            drivers.map(({id, ...otherDriverProps}) => (
                <DriverItem key={id} {...otherDriverProps} />
            ))
        };
    </div>
);

const mapStateToProps = createStructuredSelector ({
    drivers: select2021Drivers
});

export default connect(mapStateToProps)(Drivers2021);