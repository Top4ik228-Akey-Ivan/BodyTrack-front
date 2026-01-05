/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { login, register } from '../api/auth';
import { type AuthResponse, type LoginRequest, type RegisterRequest } from '../types/auth';

export function useLogin() {
    const [loginError, setLoginError] = useState<string>('');

    const handleLogin = async (credentials: LoginRequest) => {
        setLoginError('');
        try {
            const data: AuthResponse = await login(credentials);
            localStorage.setItem('token', data.accessToken);
            window.location.href = '/workouts';
        } catch (err: any) {
            setLoginError(err.message);
        }
    };

    return { handleLogin, loginError };
}

export function useRegister() {
    const [registerError, setRegisterError] = useState<string>('');

    const handleRegister = async (credentials: RegisterRequest) => {
        setRegisterError('');
        try {
            const data: AuthResponse = await register(credentials);
            localStorage.setItem('token', data.accessToken);
            window.location.href = '/workouts';
        } catch (err: any) {
            setRegisterError(err.message);
        }
    };

    return { handleRegister, registerError };
}
