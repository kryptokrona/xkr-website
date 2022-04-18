import {writable} from "svelte/store";
import {numberWithCommas} from "../utils.js";

const defaultValues = {
    height: 0,
    nodes: 0,
    hashrate: 0,
    supply: 0,
    discordUsers: 0
}

export const stats = writable(defaultValues)

async function getData() {
    
        const discordResponse = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
        const discordData = await discordResponse.json()
        defaultValues.discordusers = discordData.presence_count



    fetch('https://blocksum.org/api/v1/supply')
        .then(res => {
            if (!res.ok) {
                throw Error("Progress bar could not fetch data")
            }
            return res.json()
        })
        .then(data => {
            percentage = ((data.supply.current / maxSupply) * 100).toFixed(2)
            supply = numberWithCommas(data.supply.current)
        })
        .catch(err => console.log(err))

    fetch("https://blocksum.org/api/getinfo")
        .then(res => {
            if (!res.ok) {
                throw Error('could fetch blocksum')
            } else return res.json()
        })
        .then(data => {
            hashrate = (data.hashrate / 1000000).toFixed(2)
            blockHeight = data.height
            nodes = data.grey_peerlist_size
        }).catch(err => {
        console.log(err)

        fetch('https://swenode.org/api/getinfo')
            .then(res => res.json())
            .then(data => {
                hashrate = (data.hashrate / 1000000).toFixed(2)
                blockHeight = data.height
                nodes = data.grey_peerlist_size
            })
            .catch(err => {
                console.log(err)
            })
    })
}

setInterval(getData, 15000)
getData()



