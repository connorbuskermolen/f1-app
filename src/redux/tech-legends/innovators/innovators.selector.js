import { createSelector } from 'reselect';

const selectInnovators = state => state.innovators;

export const selectInnovatorItems = createSelector (
    [selectInnovators],
    innovators => innovators.designers
);