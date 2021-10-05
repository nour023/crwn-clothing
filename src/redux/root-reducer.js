import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer'

const persistConfig ={
    key:'root',
    storage,
    whoteList:['cart']
}

const rootReducer = combineReducers({
    cart:cartReducer,
    directory: directoryReducer,
    shop :shopReducer
})


export default persistReducer(persistConfig , rootReducer)