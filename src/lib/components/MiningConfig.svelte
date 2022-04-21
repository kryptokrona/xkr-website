<script>
    import {generateConfig} from "/src/lib/utils.js";

    let address

</script>


<div class="card">
    <div class="card-header">
        <h3>Generate Config</h3>
    </div>
    <div class="content-wrapper">
        <div class="input-wrapper">
            <p>Address:</p>
            <input placeholder="sekr.." type="text" bind:value={address}>
        </div>
        <dib class="input-wrapper">
            <p>Select pool: </p>
            <input placeholder="sekr.." type="text" bind:value={address}>
        </dib>
    </div>
    <button on:click={() => generateConfig(address)}>Generate</button>
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


      .card-header {
        border-bottom: 1px solid var(--card-border);
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        margin-bottom: 20px;
        height: 40px;
      }

      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 15px;

        p {
          margin: 0;
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
        background-color: #1c1c1c;
        border: 1px solid var(--border-color);
        border-radius: 0.4rem;
        color: var(--title-color);
        padding: 0 10px;
        height: 40px;
        width: 100%;
      }

      button {
        width: 80px;
        padding: 8px;
        border-radius: 0.4rem;
        background-color: var(--success-color);
        border: none;
        align-self: center;
        margin-top: 20px;
      }
    }

</style>