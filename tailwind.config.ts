import { config as _config } from "@/config/config";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#1D1D1B",
				light: "#fff",
				primary: "#AC3931",
				secondary: "#F4D35E",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
				},
				center: true,
				screens: {
					sm: "600px",
					md: "728px",
					lg: "984px",
					xl: "1024px",
					"2xl": "1280px",
				},
			},
			dropShadow: {
				brandShadow: "5px 5px 8px 0px rgba(30, 30, 30, 5%);",
			},
		},
	},
	plugins: [],
};
export default config;
