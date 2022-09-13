import {writable} from "svelte/store";

export const api = writable([])

//Fetch all posts
const fetchAPI = () => {
    fetch('https://api.hugin.chat/api/v2/posts?size=50', {
        headers: {
            "Accept-Encoding": "gzip",
        }
    })
        .then(res => {
                if(!res.ok) throw new Error(res.status);
                else return res.json();
            })
        .then(data => {
            let filter = data.items.filter(post => post.key !== null)
            api.set(filter)
        })
        .catch(error => console.log(error))
}

fetchAPI()
