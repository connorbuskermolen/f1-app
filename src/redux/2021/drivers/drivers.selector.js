import { createSelector } from 'reselect';

const selectDriver = state => state.drivers2021;

export const select2021Drivers = createSelector (
    [selectDriver],
    drivers2021 => drivers2021.drivers
)