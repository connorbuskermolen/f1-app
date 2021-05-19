import { createSelector } from 'reselect';

const selectRecord = state => state.record;

export const selectRecords = createSelector (
    [selectRecord],
    record => record.records
);