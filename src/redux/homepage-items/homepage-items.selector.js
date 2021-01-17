import { createSelector } from 'reselect';

const selectPageItems = state => state.pageItems;

export const selectPageItemsSections = createSelector (
    [selectPageItems],
    pageItems => pageItems.sections
);