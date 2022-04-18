<script>

    import {numberWithCommas} from "../utils.js";
    import {onMount} from "svelte";

    let percentage
    let supply
    let hashrate
    let blockHeight
    let nodes
    const maxSupply = 1000000000

onMount(() => {

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
})

</script>

<div class="wrapper">
    <div class="text-wrapper">
        <p><span style="opacity: 100%; color: white">💰</span> {supply}</p>
        <p>{percentage}%</p>
    </div>
    <div class="goal">
        <div style="width: {percentage}%" class="progress"></div>
    </div>
    <div class="status">
        <div class="status-card">
            <h3 class="status-title">Height</h3>
            <p class="status-text">{blockHeight}</p>
        </div>
        <div class="status-card">
            <h3 class="status-title">Hashrate</h3>
            <p class="status-text">{hashrate} MH/s</p>
        </div>
        <div class="status-card">
            <h3 class="status-title">Nodes</h3>
            <p class="status-text">{nodes}</p>
        </div>
    </div>
</div>

<style lang="scss">

  .wrapper {
    width: 100%;
    margin-top: 20px;
  }

    .text-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .goal {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 10px;
      border-radius: 10px;
      background-color: var(--border-color);
      width: 100%;
      padding: 1px;

      .progress {
        animation: load 3s normal forwards;
        box-shadow: 0 10px 40px -10px #ffffff;
        background-color: var(--green);
        height: 8px;
        border-radius: 10em;
        width: 8%;
        transition: all 3s;
      }
    }

    .status {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
</style>