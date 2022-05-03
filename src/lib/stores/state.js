import {writable} from "svelte/store";

export const state = writable({
    loading: true
})

export const node = writable()

const getNodes = () => {
    fetch('https://swepool.org/api/stats')
        .then(res => res.json())
        .then(data => {
            node.set({
                reward: (data.lastblock.reward / 100000).toFixed(2)
            })
        })
        .catch(err => {
            console.log(err)
        })
}
setInterval(getNodes, 15000)
getNodes()