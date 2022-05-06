<script>
    import {generateConfig} from "$lib/utils/utils.js";
    import Button from "./buttons/Button.svelte";

    let address
</script>

<div class="card">
    <div>
        <h3>Generate config</h3>
        <p>Enter address to generate a ready-to-go config for xmrig.</p>
        <input placeholder="Enter address" type="text" bind:value={address}>
    </div>
        <Button text="Generate" disabled={!address} enabled={address} on:click={() => generateConfig(address)}/>
</div>

<style lang="scss">

  .card {
    box-sizing: border-box;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    padding: 20px;
    border-radius: 0.4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 1000px) {
      max-width: 100%;
    }

    h3 {
      margin: 0;
    }

    input {
      box-sizing: border-box;
      background-color: var(--backgound-color);
      border: none;
      border-radius: 0.4rem;
      color: var(--title-color);
      padding: 0 10px;
      margin-bottom: 20px;
      height: 36px;
      width: 100%;

      &:focus {
        outline: none;
        border: 1px solid var(--title-color);
      }
    }

  }

</style>