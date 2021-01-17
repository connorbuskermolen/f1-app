import { createSelector } from 'reselect';

const selectWDC = state => state.wdc;

export const selectWDCDrivers = createSelector (
    [selectWDC],
    wdc => wdc.drivers
);