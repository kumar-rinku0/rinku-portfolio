import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
        },
        colors: {
            primary: "#1c1c22",
            accent: {
                DEFAULT: "#00ff99",
                hover: "#00e187",
            },
            white: "#ffffff",
            transparent: "transparent",
            current: "currentColor",
            indigo: {
                400: "#818cf8",
            },
            gray: {
                400: "#9ca3af",
                500: "#6b7280",
                800: "#1f2937",
            },
            red: {
                500: "#ef4444",
            },
            yellow: {
                500: "#eab308",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
