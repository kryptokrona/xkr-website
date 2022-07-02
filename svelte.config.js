import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import mdsvexConfig from "./mdsvex.config.js";
import {mdsvex} from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            fallback: 'index.html',
        }),
        csp: {
            mode: 'nonce',
            directives: {
                "script-src": ['self'],
                "base-uri": ['self'],
                "font-src": ['self'],
                "form-action": ['self'],
                "frame-ancestors": ['none'],
                "frame-src": ['self'],
                "manifest-src": ['self'],
                "media-src": ['self'],
                "object-src": ['none'],
                "upgrade-insecure-requests": true
            }
        },
        prerender: {
            crawl: true,
            enabled: true,
            onError: 'continue',
            entries: ['*'],
        },
        vite: {
            server: {
                fs: {
                    allow: ['..']
                }
            },
        }
	},
    extensions: [".svelte", ...mdsvexConfig.extensions],
    preprocess: [
        mdsvex(mdsvexConfig),
        sveltePreprocess({
            scss: {
                prependData: `@import 'src/lib/theme/global.scss';`
            }
        }),
    ],

    onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === 'css-semicolonexpected' || code === 'css-ruleorselectorexpected' || code === 'css-unused-selector')
            return;
        handler(warning);
    }
}

export default config
