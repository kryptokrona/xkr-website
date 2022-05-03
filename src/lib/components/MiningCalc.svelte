<script>
    import {node} from "../stores/state.js";
    import Button from "./buttons/Button.svelte";

    let input;
    let daily = 100
    let weekly = 500
    let monthly = 1000

    const calc = () => {
        daily = $node.reward
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
            <th><h3>Daily</h3></th>
            <th><h3>Weekly</h3></th>
            <th><h3>Monthly</h3></th>
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
    max-width: 660px;

    @media only screen and (max-width: 1000px) {
      max-width: 100%;
    }

    table {
      text-align: center;
    }

    h3 {
      margin: 0;
    }

    div{
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
      width: 100%;
      height: 40px;

      &:focus {
        outline: none;
        border: 1px solid var(--title-color);
      }
    }
  }
</style>
