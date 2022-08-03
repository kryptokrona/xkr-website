import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            fallback: 'index.html',
        }),
        csp: {
            mode: 'auto',
            directives: {
                "script-src": ['self', 'https://www.google.com/recaptcha/api.js'],
                "base-uri": ['self'],
                "font-src": ['self'],
                "form-action": ['self'],
                "frame-ancestors": ['none'],
                "frame-src": ['self', 'https://www.google.com/'],
                "manifest-src": ['self'],
                "media-src": ['self'],
                "object-src": ['none'],
                "upgrade-insecure-requests": true
            }
        },
	},
    preprocess: [
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
