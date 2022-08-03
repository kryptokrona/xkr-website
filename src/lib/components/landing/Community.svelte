<script>
    import LinkArrow from "../icons/LinkArrow.svelte";
    import {LL, locale} from "$i18n/i18n-svelte";

    import {onMount} from "svelte";

    let online
    onMount(async () => {
        const response = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
        const data = await response.json()
        online = data.presence_count
    })
</script>

<div class="grid gap" id="community">
    <div class="row text">
        <h2>{$LL.components.community.title()}</h2>
        <p>{$LL.components.community.text()}</p>
    </div>
    <div class="row grid gap">
        <a class="platform" href="https://hugin.chat">
            <div>
                <h3>Hugin</h3>
                <LinkArrow/>
            </div>
            <p>{$LL.components.community.huginText()}</p>
        </a>
        <a class="platform" href="https://discord.gg/nRK5k7wYy8">
            <div>
                <h3>Discord</h3>
                <LinkArrow/>
            </div>
            <p>{$LL.components.community.discordText()}</p>
        </a>
        <a class="platform" href="https://t.me/xkrofficial">
            <div>
                <h3>Telegram</h3>
                <LinkArrow/>
            </div>
            <p>{$LL.components.community.telegramText()}</p>
        </a>
        <a class="platform" href="https://twitter.com/kryptokrona">
            <div>
                <h3>Twitter</h3>
                <LinkArrow/>
            </div>
            <p>{$LL.components.community.twitterText()}</p>
        </a>
    </div>
</div>

<style lang="scss">

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    h2 {
      font-size: 3rem;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }
  }

  .gap {
    gap: 1rem;
  }

  .row {
    grid-column: span 12 / span 12;
  }

  .text {

    @media screen and (max-width: 1000px) {
      text-align: center;
    }

    h2 {
      font-size: 3rem;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }
  }

  .platform {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    padding: 20px;
    grid-column: span 6 / span 6;
    text-decoration: none;
    border-radius: 5px;
    transition: 200ms ease-in-out;

    div {
      display: flex;
      justify-content: space-between;
    }

    h3, p {
      margin: 0;
    }

    @media screen and (max-width: 568px) {
      grid-column: span 12 / span 12;
    }

    &:hover {
      border-color: var(--success-color);
    }
  }

</style>