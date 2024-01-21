/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"fondo": "#060203",
				"rezalte": "#2D3E87",
				"secundario": "#E0E0F5",
				"complementario": "#88D7C5",
				"terceario": "#AE3A46"
			}
		},
	},
	plugins: [],
}
