import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {tokenSlice} from './reducers';

export const store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
    },
    middleware: [thunk],
});
