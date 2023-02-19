import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: null,
    role: null,
    authorities: [],
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.role = action.payload.role
            state.authorities = action.payload.authorities
        },
    },
});
export const { setToken } = tokenSlice.actions
