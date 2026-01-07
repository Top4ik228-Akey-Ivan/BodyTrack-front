import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi';
import type { IUser } from '../../../types/auth';

interface AuthState {
    isAuth: boolean;
    user: IUser | null;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
                state.isAuth = true;
                state.user = payload;
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
                state.isAuth = true;
                state.user = payload;
            })
            .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
                state.isAuth = false;
                state.user = null;
            })
            .addMatcher(authApi.endpoints.getMe.matchFulfilled, (state, { payload }) => {
                state.isAuth = true;
                state.user = payload;
            });
    },
});

export default authSlice.reducer;
