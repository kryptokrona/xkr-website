import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        vite: {
            server: {
                fs: {
                    allow: ['..']
                }
            }
        }
	},
    preprocess: sveltePreprocess({
        scss: {
            prependData: `@import 'src/lib/theme/global.scss';`
        }
    }),
    onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
            return;
        handler(warning);
    },
}

export default config
