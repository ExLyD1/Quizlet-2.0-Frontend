export const login = async (email: string, password: string, accessToken: string) => {
    return {
        success: true,
        user: {
            id: 1,
            email,
        },
    };
};

export const register = async (email: string, password: string) => {
    return {
        accessToken: 'mocked_token',
        refreshToken: 'mocked_refresh_token',
        success: true,
        user: {
            id: 1,
            email,
        },
    };
};
