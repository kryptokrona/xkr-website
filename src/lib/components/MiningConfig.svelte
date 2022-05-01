<script>
    import {generateConfig} from "/src/lib/utils.js";
    import Button from "./buttons/Button.svelte";

    let address
</script>

<div class="card">
    <div class="content-wrapper">
        <div class="input-wrapper">
            <p>Address:</p>
            <input placeholder="sekr.." type="text" bind:value={address}>
        </div>
    </div>
    <Button text="Generate" disabled={!address} enabled={address} on:click={() => generateConfig(address)}/>
</div>

<style lang="scss">

  .card {
    box-sizing: border-box;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    padding: 10px 20px 20px 20px;
    border-radius: 0.4rem;
    max-width: 360px;
    display: flex;
    flex-direction: column;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 15px;

      p {
        margin: 0;
        font-size: 0.75rem;
        text-align: center;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
      }
    }

    input {
      box-sizing: border-box;
      background-color: var(--backgound-color);
      border: 1px solid var(--border-color);
      border-radius: 0.4rem;
      color: var(--title-color);
      padding: 0 10px;
      height: 40px;
      width: 100%;

      &:focus {
        outline: 1px solid var(--title-color);
        border: 1px solid var(--title-color);
      }
    }

  }

</style>