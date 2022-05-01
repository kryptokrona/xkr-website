<script>
    import {fly, fade} from "svelte/transition";

</script>

<div on:click|self in:fade out:fade="{{delay: 200}}" class="wrapper">

    <div></div>
    <div in:fly="{{delay: 200, y: 50}}" out:fly="{{y: 50}}" class="card border_rgb">
        <h2>Join us on Discord!</h2>
        <p>Join us on our Discord server; here, you can find friends with similar interests, talk with contributors and find ways to contribute yourself.</p>
        <a href="https://discord.gg/nRK5k7wYy8"><button>Join us!</button></a>
    </div>
    <div></div>
</div>

<style lang="scss">

    .wrapper {
      margin-top: -200px;
      z-index: 999;
      position: fixed;
      display: flex;
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
        background-image: url("/static/discordbg.png");
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
          color: #202020;
          text-align: center;
        }

        p {
          text-align: center;
          color: #202020;
          text-shadow:  0 0 4px rgba(255, 255, 255, 0.5);
        }

        button {
          color: white;
          background: #5F86F2;
          border: 1px solid #83A4FF;
          border-radius: 0.4rem;
          width: 150px;
          padding: 10px;
          transition: 250ms ease-in-out;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(32, 32, 32, 0.1);

          &:hover{
            background-color: #8faeff;
          }
        }
      }
    }

</style>