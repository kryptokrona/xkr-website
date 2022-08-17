// replaces the locale slug in a relative url
// e.g. /en/articles/article-1 => /sv/articles/article-1

/**
 * @param { string } path
 * @param { string } locale
 * @returns string
 */
export const replaceLocaleInUrl = (path, locale) => {
	const [, , ...rest] = path.split("/");
	return `/${[locale, ...rest].join("/")}`;
}