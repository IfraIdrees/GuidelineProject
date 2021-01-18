import {combineReducers} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import dummy from './dummy'

const reducer=combineReducers({
    dummy,
});

const store=configureStore({
    reducer,
});

export default store;