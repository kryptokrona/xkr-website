import {writable} from "svelte/store";

export const cache = writable([])

//Fetch all posts
const fetchCache = async () => {
    const response = await fetch('https://cache.hugin.chat/api/v1/posts?size=20')
    let data = await response.json()
    cache.set(data)
}

fetchCache()
setInterval(fetchCache, 5000)