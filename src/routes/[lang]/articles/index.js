import {getDirectusClient} from '$lib/directus';

export async function GET({url}) {
    const directus = await getDirectusClient();
    const lang = (url.pathname.split('/')[1])

    let posts;
    try {
        posts = await directus.items(`articles_${lang}`).readByQuery({
            fields: ['*'],
            sort: '-date_created',
            filter: {status: 'published'},
        })
    } catch (err) {
        console.log(err)
        return {
            status: 404
        };
    }
    return {
        status: 200,
        body: {posts},
    };
}