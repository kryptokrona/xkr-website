<script>
    import {onMount} from "svelte";
    import playbtn from "/static/googleplay.png"
    import Button from "./buttons/Button.svelte";

    let latest_mac;
    let latest_win;
    let latest_lin;
    let backup = 'https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases'
    let file
    onMount(() => {
        fetch("https://api.github.com/repos/kryptokrona/kryptokrona-desktop-wallet/releases/latest")
            .then((response) => response.json())
            .then((data) => {
                let files = data.assets;
                for (file in files) {
                    if (files[file].name.slice(files[file].name.length - 3) === "dmg") {
                        latest_mac = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 3) === "exe") {
                        latest_win = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 8) === "AppImage") {
                        latest_lin = files[file].browser_download_url;
                    }
                }
                console.log(latest_mac, latest_lin, latest_win)
            });
    })

    $: {
        latest_lin = undefined ? latest_lin : backup
        latest_mac = undefined ? latest_mac : backup
        latest_win = undefined ? latest_win : backup
    }

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

<div class="wrapper">
    <h1>Choose a wallet</h1>
    <div class="btn-wrapper">
        <Button text="Desktop" enabled={desktop} on:click={() => handleClick('desktop')}/>
        <Button text="Mobile" enabled={mobile} on:click={() => handleClick('mobile')}/>
        <Button text="Terminal" enabled={terminal} on:click={() => handleClick('terminal')}/>
    </div>

    {#if desktop}
        <div class="selection-wrapper">
            <div class="card">
                <div>
                    <h2>Store on desktop</h2>
                    <p>Using our wallet you can store, send and receive Kryptokrona.
                        We currently have desktop wallets for Windows, Linux and Mac!</p>
                    <div>
                        <a href={latest_win}>Windows</a>
                        <a href={latest_mac}>Mac</a>
                        <a href={latest_lin}>Linux</a>
                        <a href="https://github.com/kryptokrona/kryptokrona-desktop-wallet">Source</a>
                    </div>
                </div>
            </div>
        </div>
    {:else if mobile}
        <div class="selection-wrapper">
            <div class="card">
                <div>
                    <h2>Store on mobile</h2>
                    <p>Using our wallet you can store, send and receive Kryptokrona.
                        We currently have desktop wallets for Windows, Linux and Mac!</p>
                    <a href="https://play.google.com/store/apps/details?id=com.xkr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img style="height: 36px" src={playbtn} alt=""></a>
                </div>

            </div>
        </div>
    {:else if terminal}
        <div class="selection-wrapper">
            <div class="card">
                <div>
                    <h2>Store on terminal</h2>
                    <p>Using our wallet you can store, send and receive Kryptokrona.
                        We currently have desktop wallets for Windows, Linux and Mac!</p>
                    <a href="https://github.com/kryptokrona/kryptokrona/releases">Download from github</a>
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
  .btn-wrapper {
    display: flex;
    gap: 10px;
    margin: 40px 0;

    @media only screen and (max-width: 360px) {
      flex-direction: column;
    }
  }

  .card {
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 0.4rem;
    padding: 40px 40px 0 40px;
    width: 100%;
    max-width: var(--website-width);
    overflow: hidden;
    box-sizing: border-box;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      padding: 20px 20px 0 20px;
    }

    div {
      max-width: 50%;


      @media only screen and (max-width: 800px) {
        order: 0;
        max-width: 100%;
        text-align: center;
        margin-bottom: 40px;
      }
    }

    h1 {
      margin: 0;
    }

    svg {
      max-width: 450px;

      @media only screen and (max-width: 800px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
</style>