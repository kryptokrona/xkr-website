import {writable} from "svelte/store";

export const cache = writable([])

//Fetch all posts
const fetchCache = () => {
    fetch('https://cache.hugin.chat/api/v1/posts?size=100')
        .then(res => {
                if(!res.ok) throw new Error(res.status);
                else return res.json();
            })
        .then(data => {
            let filter = data.items.filter(post => post.key !== null)
            cache.set(filter)
        })
        .catch(error => console.log(error))
}

fetchCache()
setInterval(fetchCache, 10000)