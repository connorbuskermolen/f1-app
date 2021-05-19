import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import directoryReducer from './directory/directory.reducer';
import homePageItemsReducer from './homepage-items/homepage-items.reducer';
import wdcReducer from './wdc/wdc.reducer';
import innovatorsReducer from './tech-legends/innovators/innovators.reducer';
import bossesReducer from './tech-legends/bosses/bosses.reducer';
import drivers2021Reducer from './2021/drivers/drivers.reducer';
import recordsReducer from './records/records.reducer';
import carsReducer from './cars/cars.reducer';
import wccReducer from './wcc/wcc.reducer';

const presistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    directory: directoryReducer,
    pageItems: homePageItemsReducer,
    wdc: wdcReducer,
    innovators: innovatorsReducer,
    bosses: bossesReducer,
    drivers2021: drivers2021Reducer,
    record: recordsReducer,
    cars: carsReducer,
    wcc: wccReducer
});

export default persistReducer(presistConfig, rootReducer);