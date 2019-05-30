
let initialState = [
    {
        id:1,
        name:'iphone',
        price:100,
        status:false
    },
    {
        id:2,
        name:'hwait',
        price:200,
        status:true
    },
    {
        id:3,
        name:'samsung',
        price:300,
        status:false
    }

];

let products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;