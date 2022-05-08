<script>
    import {fly, fade} from "svelte/transition";
    import Button from "./buttons/Button.svelte";
    import LinkButton from "./buttons/LinkButton.svelte";

</script>

<div in:fade out:fade="{{delay: 200}}" class="wrapper">
    <div></div>
    <div in:fly="{{delay: 200, y: 50}}" out:fly="{{y: 50}}" class="card border_rgb">
        <h2>Join us on Discord!</h2>
        <p>Join us on our Discord server; here, you can find friends with similar interests, talk with contributors and find ways to contribute yourself.</p>
        <LinkButton text="Join us!" url="https://discord.gg/nRK5k7wYy8" info={true}/>
    </div>
    <p on:click|self style="cursor: pointer">No, thanks!</p>
</div>

<style lang="scss">

    .wrapper {
      margin-top: -200px;
      z-index: 999;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      padding: 20px;
      box-sizing: border-box;
      background-color: rgba(32, 32, 32, 0.43);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);

      .card {
        background-color: var(--card-background);
        background-repeat: no-repeat;
        background-position: center;
        border: 1px solid var(--card-border);
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        box-sizing: border-box;
        height: 300px;
        max-width: 400px;

        h2 {
          margin: 0;
          color: var(--title-color);
          text-align: center;
        }

        p {
          text-align: center;
        }
      }
    }

</style>