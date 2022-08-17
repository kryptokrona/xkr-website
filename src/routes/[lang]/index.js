import {getDirectusClient} from "/src/lib/directus.js";

export async function GET({url}) {
    const directus = await getDirectusClient();
    const lang = (url.pathname.split('/')[1])

    let latest;
    try {
        latest = await directus.items(`articles_${lang}`).readByQuery({
            fields: ['*'],
            sort: '-date_created',
            filter: {status: 'published'},
            limit: 3,
        })

    } catch (err) {
        console.log(err)
        return {
            status: 404
        };
    }
    return {
        status: 200,
        body: {latest},
    };
}