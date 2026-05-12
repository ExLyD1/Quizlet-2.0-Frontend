export const login = async (email: string, password: string) => {
    return {
        token: 'mocked_token',
        user: {
            id: 1,
            email,
        },
    };
};

export const register = async (email: string, password: string) => {
    return {
        token: 'mocked_token',
        user: {
            id: 1,
            email,
        },
    };
};
