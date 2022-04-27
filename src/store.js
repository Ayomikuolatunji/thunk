import { createStore,combineReducers,applyMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import  cartSlice  from "./features/Cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";

const persistConfig = {
  key: 'store',
  storage,
  stateReconciler: hardSet,
  blacklist: ['modal']
}

const authPersistConfig = {
    key: 'auth',
    storage: storage,
  }
const rootReducer = combineReducers({
    cart: persistReducer(authPersistConfig, cartSlice),
    modal: modalSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store= createStore(persistedReducer,applyMiddleware(thunk))

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    store:store,
    persistor:persistStore(store)
}