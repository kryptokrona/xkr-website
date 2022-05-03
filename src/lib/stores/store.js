import {writable} from "svelte/store";

export const store = writable({
    loading: true
})

export const network = writable()

const getNodes = () => {
    fetch('https://swepool.org/api/stats')
        .then(res => res.json())
        .then(data => {
            network.set({
                reward: (data.lastblock.reward / 100000).toFixed(2)
            })
        })
        .catch(err => {
            console.log(err)
        })
}
setInterval(getNodes, 15000)
getNodes()