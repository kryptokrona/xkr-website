<script>
    import {LL, locale} from "$i18n/i18n-svelte";
    import LinkButton from "../buttons/LinkButton.svelte";
</script>

<div class="grid gap">
    <div class="col text">
        <h2>{$LL.components.mining.title()}</h2>
        <p>{$LL.components.mining.text()}</p>
        <LinkButton text={$LL.components.mining.button()} url="/{$locale}/mining" enabled={true}/>
    </div>
    <div class="col">
        <img width="100%" src="/fan.webp" alt="">
    </div>
</div>


<style lang="scss">
  .text {

    @media screen and (max-width: 768px) {
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
    gap: 2rem;
    margin-top: 2rem;
  }

  .col {
    display: flex;
    flex-direction: column;
    grid-column: span 6 / span 6;

    @media screen and (max-width: 768px) {
      grid-column: span 12 / span 12;
      align-items: center;
    }

    h2 {
      font-size: 3rem;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }

    img {
      width: 400px;
      height: 400px;
      align-self: end;

      @media screen and (max-width: 768px) {
        align-self: center;
      }

      @media screen and (max-width: 568px) {
        width: 320px;
        height: 320px;
      }
    }
  }
</style>