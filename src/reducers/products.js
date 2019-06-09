import * as Types from '../constants/actionTypes';

let initialState = [];

let findIndex = async (products, id) => {
    let result = -1;
    let length = products.length;
    for(let i = 0; i < length; i++){
        if (products[i].id === id) {
            result = i;
        }
    }
    return result;
}
let products = (state = initialState, action) => {
    let index = -1;
    let {product,id} = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products];
        case Types.DELETE_PRODUCTS_REQUEST:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index =  findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
}

export default products;