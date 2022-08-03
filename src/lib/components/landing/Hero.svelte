<script>
    import {LL} from "$i18n/i18n-svelte";
</script>

<div class="text">
    <h1>{$LL.components.hero.title()}</h1>
    <p>{$LL.components.hero.text()}</p>
</div>

<style lang="scss">

  .text {
    width: 100%;
    margin-top: 160px;
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width: 1000px) {
      margin-top: 120px;
    }

    @media screen and (max-width: 568px) {
      margin-top: 60px;
    }

    h1 {
      font-size: 3rem;
      margin: 0 0 10px 0;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }

    p {
      line-height: 150%;
      margin: 0;
    }
  }

</style>