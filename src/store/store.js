import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import categories from './slices/category-slice';
import theme from './slices/theme-slice';

let reducers = combineReducers( {categories, theme } );

let store = configureStore( { reducer: reducers } );

export default store;
