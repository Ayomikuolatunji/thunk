import { createStore,combineReducers,applyMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import  cartSlice  from "./features/Cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer= combineReducers({
    cart:cartSlice,
    modal:modalSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store= createStore(persistedReducer,applyMiddleware(thunk))

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    store:store,
    persistor:persistStore(store)
}