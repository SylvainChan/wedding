import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            hw: ['cursive'],
            display: ['Source Serif Pro', 'Georgia', 'serif'],
            body: ['Synonym', 'system-ui', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)'],
                qwitcher_grypen: ['var(--font-qwitcher_grypen)'],
                ds: ['var(--font-ds)'],
                lato: ['var(--font-lato)'],
                mw: ['var(--font-mw)'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
export default config
