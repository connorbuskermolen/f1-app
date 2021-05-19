import React from 'react';
import RecordItem from '../../components/records-item/records-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRecords } from '../../redux/records/records.selector';

import './records.styles.scss';

const RecordsPage = ({ records }) => (
    <div className='records-page'>
        <h1 className='records-header'>Formula 1 Records</h1>
        {
            records.map(({id, ...otherRecordsProps}) => (
                <RecordItem key={id} {...otherRecordsProps} />
            ))
        };
    </div>
);

const mapStateToProps = createStructuredSelector ({
    records: selectRecords
});

export default connect(mapStateToProps)(RecordsPage);