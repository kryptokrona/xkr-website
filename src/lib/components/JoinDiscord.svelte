<script>
    import discordLogo from "/static/discord.svg";
    import arrow from '/static/arrow-right.svg'
    import {onMount} from "svelte";

    let online
    onMount(async () => {
        const response = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
        const data = await response.json()
        online = data.presence_count
    })

</script>

<a href="https://discord.gg/nRK5k7wYy8" target="_blank">
    <img src={discordLogo} alt="Discord Logo">
    <div class="text">
        <p>{online} online</p>
    </div>
    <div class="circle-wrapper">
        <div class="circle">
            <img src={arrow} alt="arrow">
        </div>
    </div>
</a>

<style lang="scss">

    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      background-color: #5f86f2;
      padding: 10px 0;
      text-decoration: none;
      transition: 250ms ease-in-out;

      &:hover {
        opacity: 80%;

        .circle {
          margin-right: 20px;
        }
      }

      p {
        color: white;
        width: 200px;
        display: flex;
        justify-content: center;
      }

      img {
        height: 36px;
        width: 36px;
        margin-left: 25px;
      }
    }

    .circle-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
    }

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: white;
      transition: 250ms ease-in-out;

      img {
        margin: 30px;
        height: 18px;
        width: 18px;
        opacity: 60%;
      }
    }

</style>