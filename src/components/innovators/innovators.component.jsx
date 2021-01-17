import React from 'react';
import InnovatorItem from '../innovator-item/innovator-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectInnovatorItems } from '../../redux/tech-legends/innovators/innovators.selector';

import './innovators.styles.scss';

const Innovators = ({innovators}) => (
    <div className='innovators-content'>
        {
            innovators.map(({id, ...otherInnovatorProps}) => (
                <InnovatorItem key={id} {...otherInnovatorProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    innovators: selectInnovatorItems
});

export default connect(mapStateToProps)(Innovators);