import React from 'react';
import ConstructorItem from '../../components/constructor-item/constructor-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWCCTeam } from '../../redux/wcc/wcc.selector';

import './wcc.styles.scss';

const WCC = ({ teams }) => (
    <div className='wcc-content'>
        <h1 className='wcc-title'>F1 World Constructors' Champions</h1>
        {
            teams.map(({id, ...otherConstructorProps}) => (
                <ConstructorItem key={id} {...otherConstructorProps} />
            ))
        };
    </div>
);

const mapStateToProps = createStructuredSelector({
    teams: selectWCCTeam
});

export default connect(mapStateToProps)(WCC);