import { type LoginRequest, type RegisterRequest } from '../types/auth';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function login(credentials: LoginRequest) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || `Login failed: ${res.status}`);
    }

    return data;
}

export async function register(credentials: RegisterRequest) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || `Register failed: ${res.status}`);
    }

    return data;
}
