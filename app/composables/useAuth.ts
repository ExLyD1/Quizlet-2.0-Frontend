import { login as apiLogin, register as apiRegister } from '@/api/auth';

export const useAuth = () => {
    const login = async (email: string, password: string, accessToken: string) => {
        const response = await apiLogin(email, password, accessToken);
        return { data: response, success: response.success };
    };

    const register = async (email: string, password: string) => {
        const response = await apiRegister(email, password);
        return { data: response, token: response.accessToken, success: response.success };
    };

    return {
        login,
        register,
    };
};
