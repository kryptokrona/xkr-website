<script>
    import Fan from "./Fan.svelte";
    import {LL, locale} from "$i18n/i18n-svelte";
    import LinkButton from "../buttons/LinkButton.svelte";
</script>

<div>
    <div class="text">
        <h2>{$LL.components.mining.title()}</h2>
        <p>{$LL.components.mining.text()}</p>
        <LinkButton text={$LL.components.mining.button()} url="/{locale}/mining" enabled={true}/>
    </div>
    <div class="grid gap">
        <div class="col">
            <Fan/>
        </div>
        <div class="col hide-tablet">
            <Fan/>
        </div>
        <div class="col hide-desktop">
            <Fan/>
        </div>
    </div>
</div>


<style lang="scss">
  .text {

    @media screen and (max-width: 1000px) {
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      margin: 0;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }

    p {
      margin-bottom: 2rem;
    }
  }

  .grid {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .gap {
    gap: 1rem;
    margin-top: 2rem;
  }

  .col {
    grid-column: span 4 / span 4;

    @media screen and (max-width: 768px) {
      grid-column: span 6 / span 6;
    }

    @media screen and (max-width: 568px) {
      grid-column: span 12 / span 12;
    }

    h2 {
      font-size: 3rem;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }
  }

  .hide-tablet {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hide-desktop {
    @media screen and (max-width: 568px) {
      display: none;
    }
  }

  .box {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 20px;

    h2 {
      margin: 0;
    }
  }
</style>