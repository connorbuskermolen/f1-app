import { createSelector } from 'reselect';

const selectWCC = state => state.wcc;

export const selectWCCTeam = createSelector (
    [selectWCC],
    wcc => wcc.teams
);