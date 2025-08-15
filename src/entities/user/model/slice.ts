import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from './types';

const initialState: User = {
    isAuthenticated: false,
    id: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id:string; email: string}>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.id = '';
            state.email = '';
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;