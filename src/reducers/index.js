import { combineReducers } from 'redux';
import products from './products';

let appReducers = combineReducers({
    products
});

export default appReducers;