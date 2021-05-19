import React from 'react';

import CarItem from '../../components/car-item/car-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCars } from '../../redux/cars/cars.selector';

import './cars.styles.scss'

const CarsPage = ({ cars }) => (
    <div className='cars-page'>
        <h1 className='cars-title'>Iconic Formula 1 Cars</h1>
        {
            cars.map(({id, ...otherCarProps}) => (
                <CarItem key={id} {...otherCarProps} />
            ))
        };
    </div>
);

const mapStateToProps = createStructuredSelector({
    cars: selectCars
});

export default connect(mapStateToProps)(CarsPage);