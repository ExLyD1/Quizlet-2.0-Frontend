import { defineStore, ref } from '#imports';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref({
        isAuthenticated: false,
        refreshToken: '',
        accessToken: '',
        id: 1,
        email: '',
    });

    const setProfile = (newProfile: { id: number; email: string }) => {
        profile.value = newProfile;
    };

    return {
        profile,
        setProfile,
    };
});
