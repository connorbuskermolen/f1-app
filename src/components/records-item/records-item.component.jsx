import React from 'react';

import './records-item.styles.scss';

const RecordItem = ({ recordName, holder, record, acheived}) => (
    <div className='record-item'>
        <h2 className='record-title'>
            {recordName}
        </h2>
        <h3 className='record-holder'>{holder}</h3>
        <h3 className='record-value'>{record}</h3>
        <h3 className='record-acheived'>{acheived}</h3>
    </div>
);

export default RecordItem;