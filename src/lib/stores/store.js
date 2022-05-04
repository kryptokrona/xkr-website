import {writable} from "svelte/store";
import {numberWithCommas} from "../utils.js";

export const state = writable({
    loading: true
})

export const network = writable({
    reward: 0,
    percentage: 0,
    supply: 0,
    hashrate: 0,
    blockHeight: 0,
    nodes: 0
})

const getData = () => {

    fetch('https://swepool.org/api/stats')
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch swepool")
            }
            return res.json()
        })
        .then(data => {
            network.update(current => {
                return {
                    ...current,
                    reward: (data.lastblock.reward / 100000).toFixed(2)
                }
            })
        }).catch(err => console.log(err))

    fetch('https://blocksum.org/api/v1/supply')
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch supply")
            }
            return res.json()
        })
        .then(data => {
            network.update(current => {
                return {
                    ...current,
                    percentage: ((data.supply.current / 1000000000) * 100).toFixed(2),
                    supply: numberWithCommas(data.supply.current)
                }
            })
        })
        .catch(err => console.log(err))

    fetch("https://blocksum.org/api/getinfo")
        .then(res => {
            if (!res.ok) {
                throw Error('could fetch blocksum getinfo')
            } else return res.json()
        })
        .then(data => {
            network.update(current => {
                return {
                    ...current,
                    hashrate: data.hashrate,
                    blockHeight: data.height,
                    nodes: data.grey_peerlist_size
                }
            })
        }).catch(err => console.log(err))

}
setInterval(getData, 60000)
getData()