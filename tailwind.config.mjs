/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gemes: {
					gold: '#D4AF37',
					dark: '#A38325',
					black: '#0a0a0a',
				}
			},
            // AGREGA ESTO:
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				heading: ['Oswald', 'sans-serif'], // Nuestra fuente de títulos rockeros
			}
		},
	},
	plugins: [],
}