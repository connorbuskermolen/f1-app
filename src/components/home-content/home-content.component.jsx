import React from 'react';
import PageItem from '../page-item/page-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPageItemsSections } from '../../redux/homepage-items/homepage-items.selector';

import './home-content.styles.scss';

const HomeContent = ({ sections }) => (
    <div className='home-content'>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <PageItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectPageItemsSections
});

export default connect(mapStateToProps)(HomeContent);
