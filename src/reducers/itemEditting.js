import * as Types from '../constants/actionTypes';


let initialState = {};

let appReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.ITEM_EDITTING:
            state = action.product
            return { ...state };
        default:
            return state;
    }
}

export default appReducers;