<script>
    import {network} from "../stores/store.js";
    import Button from "./buttons/Button.svelte";

    let input;
    let type
    let daily = '-'
    let weekly = '-'
    let monthly = '-'


    const calc = () => {
    }

</script>

<div class="card">
    <h3>Mining Calculator</h3>
    <p>Enter your hashrate to calculate your potential earnings</p>
    <div>
        <input placeholder="Enter hashrate" on:keyup={calc} type="text" required bind:value={input}/>
        <Button text="Calculate" enabled={input} disabled={!input}/>
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
            <td><p>{daily}</p></td>
            <td><p>{weekly}</p></td>
            <td><p>{monthly}</p></td>
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
