export interface ILogin{
    email: string,
    password: string
}

export interface User{
    _id: string | null;
    fullName: string | null;
    email: string | null;
    avatarUrl: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    __v: number | null;
    token: string;
}

export interface AuthState{
    user: User;
    isAuth: boolean;
    status: 'init' | 'loading' | 'error' | 'success'; 
}