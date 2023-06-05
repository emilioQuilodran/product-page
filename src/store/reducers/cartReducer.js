import { ADD_CART, DELETE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY, GET_NUMBER_CART, GET_PRODUCTS } from "../actions/actions";
import { Product } from '../../models/product'
const initialState = {
    total: 0,
    Cart:[],
    items:[
        new Product(
            1,
            "Fall Limited Edition Sneakers",
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            250.00,
            1,
            false,
            false,
            undefined
        )
    ],
    addedItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            let addedItem = state.items.find(item => item.id = action.payload.item.id)
            let existedItem = state.addedItems.includes(addedItem)
            if(existedItem){
                return {
                    ...state,
                    total: addedItem.count * addedItem.price,
                    quantity: addedItem.count
                }
            } else {
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : state.total + addedItem.price,
                    quantity: addedItem.count
                }
            }
        case DECREASE_QUANTITY:
            let obj = state.items.find(item => item.id = action.payload.id)
            if(action.payload.count !== 1){
                let item = action.payload
                let total = state.total - obj.price
                item.count -= 1
                return {
                    ...state,
                    total: total
                }
            } else {
                return{
                    ...state,
                }
            }
        case INCREASE_QUANTITY:
            let item = action.payload
            item.count += 1; 
            let total = state.total + item.price

            return {
                ...state,
                total: total
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case GET_PRODUCTS:
            return {
                ...state,
                items: state.items
            }
        case DELETE_ITEM:
            let itemToRemove = state.items.find(item => item = action.payload.item);
            itemToRemove.count = 1;
            let new_items = state.addedItems.filter(itemToRemove => itemToRemove === action.payload.item)
            let newTotal = 0
            let qty = 0;
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                quantity: qty
            }
        default:
            return state;
    }
}

export default cartReducer