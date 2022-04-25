import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import {mdsvex} from "mdsvex";

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

    extensions: ['.svelte', '.md'],

    preprocess: [
        sveltePreprocess({
            scss: {
                prependData: `@import 'src/lib/theme/global.scss';`
            }
        }),
        mdsvex({
            extensions: ['.md'],
            layout: {
                blog: 'src/routes/blog/_post.svelte'
            }
        })
    ],

    onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
            return;
        handler(warning);
    }
}

export default config
