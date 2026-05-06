import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{html,ts,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};

export default config;
