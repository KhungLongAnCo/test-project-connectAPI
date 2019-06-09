import * as Types from '../constants/actionTypes';
import callerApi from '../utils/apiCaller';

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
export const FetchAllProducts = (dispatch) => {
    return (dispatch) => {
        return callerApi('products', "GET", null)
            .then((res) => {
                dispatch(actFetchProducts(res.data));
            })
    }
}


export const DeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS_REQUEST,
        id
    }
}

export const DeleteProductRequest = (id) => {
    return (dispatch) => {
        return callerApi(`products/${id}`, 'DELETE', null)
            .then((res) => {
                console.log(res.data);
                dispatch(DeleteProduct(id));
            })
    }
}

export const AddToProduct = (product) => {
    return (dispatch) => {
        return callerApi('products', 'POST', product)
            .then(res => {
                dispatch(FetchAllProducts());
            })
    }
}

export const UpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
export const UpdateProductRequest = (product) => {
    return (dispatch) => {
        return callerApi(`products/${product.id}`, 'PUT', product)
            .then((res) => {
                dispatch(UpdateProduct(res.data));
                dispatch(FetchAllProducts());
            })
    }
}

export const GetItemEdittingRequest = (id) => {
    return (dispatch) => {
        return callerApi(`products/${id}`, 'GET', null)
            .then(res => {
                dispatch(GetItemEditting(res.data, id));
            })
    }
}
export const GetItemEditting = (product) => {
    return {
        type: Types.ITEM_EDITTING,
        product
    }
}
