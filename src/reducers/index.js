import { combineReducers } from 'redux';
import products from './products';
import itemEditting from './itemEditting';

let appReducers = combineReducers({
    products,
    itemEditting
});

export default appReducers;