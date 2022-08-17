import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$i18n: path.resolve('./src/i18n'),
			$lib: path.resolve('./src/lib'),
		},
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
};

export default config;
