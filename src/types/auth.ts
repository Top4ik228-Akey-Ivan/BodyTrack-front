export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    avatarUrl: string | null;
}

export interface AuthResponse {
    accessToken: string;
    user: IUser;
}
