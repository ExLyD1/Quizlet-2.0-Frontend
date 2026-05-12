import { login as apiLogin, register as apiRegister } from '@/api/auth';

export const useAuth = () => {
    const login = async (email: string, password: string) => {
        const response = await apiLogin(email, password);
        return response;
    };

    const register = async (email: string, password: string) => {
        const response = await apiRegister(email, password);
        return response;
    };

    return {
        login,
        register,
    };
};
