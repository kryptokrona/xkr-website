<script>
    import {onMount} from "svelte";
    import LinkButton from "./buttons/LinkButton.svelte";
    import LL from "$i18n/i18n-svelte";

    let online
    onMount(async () => {
        const response = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
        const data = await response.json()
        online = data.presence_count
    })
</script>

<div class="banner">
    <div>
        <div class="dot"></div>
        <h3>{online} Online</h3>
    </div>
    <LinkButton text="{$LL.components.fixedBanner.button()}" url="https://discord.gg/nRK5k7wYy8" target="_blank" enabled={true}/>
</div>

<style lang="scss">

  .banner {
    display: none;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    right: 0;

    @media screen and (max-width: 568px) {
      border-top: 1px solid var(--border-color);
      background-color: var(--nev-backgound-color);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-sizing: border-box;
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      gap: 10px;

      h2 {
        margin: 0;
        font-size: 1.75rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 40px;
      background-color: var(--success-color);
    }
  }
</style>