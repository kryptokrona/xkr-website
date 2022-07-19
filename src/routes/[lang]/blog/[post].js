import {getDirectusClient} from '$lib/directus';

export async function get({params, url}) {
    const directus = await getDirectusClient();
    const lang = (url.pathname.split('/')[1])

    let post;
    let related
    try {
        post = await directus.items(`articles_${lang}`).readOne(params.post, {
            fields: ['*'],
        })

        related = await directus.items(`articles_${lang}`).readByQuery({
            fields: ['*'],
            sort: '-date_created',
            limit: 3,
            filter: {status: 'published'},
        })

    } catch (err) {
        return {
            status: 404
        };
    }

    return {
        status: 200,
        body: {post, related},
    };
}