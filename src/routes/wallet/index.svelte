<script>

    let desktop = true
    let mobile;
    let terminal;

    const handleClick = input => {
        switch (input) {
            case 'desktop':
                desktop = true
                mobile = false
                terminal = false
                break
            case 'mobile':
                mobile = true
                desktop = false
                terminal = false
                break
            case 'terminal':
                terminal = true
                desktop = false
                mobile = false
                break
        }
    }

</script>

<svelte:head>
    <title>Kryptokrona | Wallet</title>
    <meta name="description" content=""/>
</svelte:head>

<div class="wrapper">
    <h1>Choose a wallet</h1>
    <div class="btn-wrapper">
        <button class:border_rgb={desktop} on:click={() => handleClick('desktop')}>Desktop</button>
        <button class:border_rgb={mobile} on:click={() => handleClick('mobile')}>Mobile</button>
        <button class:border_rgb={terminal} on:click={() => handleClick('terminal')}>Terminal</button>
    </div>

    {#if desktop}
        <div class="selection-wrapper">
            <div class="card">
                <h1>Store on desktop</h1>
                <p>Using our wallet you can store, send and receive Kryptokrona.
                    We currently have desktop wallets for Windows, Linux and Mac!</p>
            </div>
        </div>
    {:else if mobile}
        <div  class="selection-wrapper">
            <div class="card">
                <h1>Store on mobile</h1>
                <p>Using our wallet you can store, send and receive Kryptokrona.
                    We currently have desktop wallets for Windows, Linux and Mac!</p>
            </div>
        </div>
    {:else if terminal}
        <div  class="selection-wrapper">
            <div class="card">
                <h1>Store on terminal</h1>
                <p>Using our wallet you can store, send and receive Kryptokrona.
                    We currently have desktop wallets for Windows, Linux and Mac!</p>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
  .wrapper {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 20px;
  }

  .btn-wrapper {
    display: flex;
    gap: 10px;

    button {
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      color: var(--text-color);
      border-radius: 0.4rem;
      padding: 10px 20px;
      height: 36px;
      cursor: pointer;
      transition: 250ms ease-in-out;

      &:hover {
        background-color: var(--card-border);
      }
    }
  }

  .card {
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.4rem;
    padding: 40px;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    box-sizing: border-box;

    h1 {
      margin: 0;
    }

    svg {
      max-width: 300px;
    }
  }
</style>