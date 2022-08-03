import { detectLocale } from '/src/i18n/i18n-util.js'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

/** @param { string } locale */
const htmlLanguageAttributeReplacer = (locale) => ({ html }) => html.replace('<html lang="en">', `<html lang="${locale}">`)

/** @type { import('@sveltejs/kit').Handle } */
export const handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split('/')

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: htmlLanguageAttributeReplacer(lang) })
}


/** @type { import('@sveltejs/kit').GetSession } */
export const getSession = (event) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = getHeaders(event)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })
	const locale = detectLocale(acceptLanguageDetector)


	return {
		locale,
	}
}

/** @type { (event: import('@sveltejs/kit/types/private').RequestEvent) => Record<string, string> } */
const getHeaders = (event) => {
	const headers = /** @type { Record<string, string> } */ ({})
	event.request.headers.forEach((value, key) => headers[key] = value)

	return headers
}