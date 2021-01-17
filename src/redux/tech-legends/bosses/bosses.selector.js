import { createSelector } from 'reselect';

const selectBoss = state => state.bosses;

export const selectBossItems = createSelector (
    [selectBoss],
    bosses => bosses.bosses
);