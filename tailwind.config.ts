/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primarybg: "var(--background)",
                secondrybg: "var(--secondrybackground)",
            },
            padding: {
                mainPadding: "var(--mainPadding)",
                secondryPadding: "var(--secondryPadding)",
            },
        },
    },
    plugins: [],
};

export default config;
