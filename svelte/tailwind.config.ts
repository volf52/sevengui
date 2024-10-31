import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyUI from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, daisyUI]
} satisfies Config;
