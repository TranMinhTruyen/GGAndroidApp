import { combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import {configureStore} from "@reduxjs/toolkit";
import {tokenSlice} from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, tokenSlice.reducer);

export const store = configureStore({
    reducer: {
        token: pReducer
    },
    middleware: [thunk],
})
export const persistor = persistStore(store);
