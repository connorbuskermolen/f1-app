import { createSelector } from 'reselect'

const selectCar = state => state.cars

export const selectCars = createSelector (
    [selectCar],
    car => car.cars
);
