<script>
    import {network} from "../stores/store.js";
    import Button from "./buttons/Button.svelte";

    let input
    let hashrate = 0
    let type = 'h'
    let userReward = 0


    const calc = () => {

        //Always convert input into hashes per second
        switch (type) {
            case 'h':
                hashrate = input
                break
            case 'kh':
                hashrate = input * 1000
                break
            case 'mh':
                hashrate = input * 1000000
                break
        }

        //Users share determined by their input
        let share = hashrate / $network.hashrate

        //Total network reward per day (960 blocks * last reward)
        let dailyReward = $network.reward * 960

        //Calculate user reward per day
        userReward = share * dailyReward

    }

</script>

<div class="card">
    <h3>Mining Calculator</h3>
    <p>Enter your hashrate to calculate your potential earnings</p>
    <div>
        <input placeholder="Enter hashrate" type="text" required bind:value={input}/>
        <select name="type" id="type" bind:value={type}>
            <option value="h" selected>H/s</option>
            <option value="kh">KH/s</option>
            <option value="mh">MH/s</option>
        </select>
        <Button text="Calculate" on:click={calc} enabled={input} disabled={!input}/>
    </div>
    <table>
        <thead>
        <tr>
            <th><h4>Daily</h4></th>
            <th><h4>Weekly</h4></th>
            <th><h4>Monthly</h4></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><p>{(userReward).toFixed(2)}</p></td>
            <td><p>{(userReward * 7).toFixed(2)}</p></td>
            <td><p>{(userReward * 30).toFixed(2)}</p></td>
        </tr>
        </tbody>
    </table>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: 0.4rem;
    width: 100%;

    @media only screen and (max-width: 1000px) {
      max-width: 100%;
    }

    th {
      text-align: center;
      width: 33%;
    }

    th:first-child {
      text-align: left;
    }

    th:last-child {
      text-align: right;
    }

    td {
      text-align: center;
    }

    td:first-child {
      text-align: left;
    }

    td:last-child {
      text-align: right;
    }

    h4, h3 {
      margin: 0;
    }

    div {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 10px;
      margin-bottom: 20px;
    }

    input {
      box-sizing: border-box;
      background-color: var(--backgound-color);
      border: none;
      border-radius: 0.4rem;
      color: var(--title-color);
      padding: 0 10px;
      height: 36px;
      width: 100%;

      &:focus {
        outline: none;
        border: 1px solid var(--title-color);
      }
    }
  }
</style>
