import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{html,ts,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif'],
            },
            fontSize: {
                h1: ['32px', { lineHeight: '64px', fontWeight: '700' }],
                h2: ['24px', { lineHeight: '32px', fontWeight: '700' }],
                h3: ['18px', { lineHeight: '24px', fontWeight: '600' }],
                body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
                small: ['12px', { lineHeight: '16px', fontWeight: '400' }],
            },
            colors: {
                // ── Backgrounds / Surfaces ──────────────────────────────────
                bg: {
                    landing: '#2D1A28',
                    base: '#111111',
                    deep: '#202020',
                    surface: '#272727',
                    muted: '#454545',
                },
                // ── Brand (purple) ───────────────────────────────────────────
                brand: {
                    dark: '#482A41',
                    DEFAULT: '#572E54',
                    muted: '#8E7692',
                    pale: '#CEB2BD',
                    light: '#E2D2C8',
                },
                // ── Accent (blue) ────────────────────────────────────────────
                accent: {
                    DEFAULT: '#1C73BB',
                    light: '#75B8E2',
                    pale: '#A9D3E7',
                },
                // ── Neutral ──────────────────────────────────────────────────
                neutral: {
                    400: '#9D9D9D',
                    0: '#FFFFFF',
                },
                // ── Semantic ─────────────────────────────────────────────────
                error: '#EB3D3D',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};

export default config;
