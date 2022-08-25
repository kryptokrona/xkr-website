<script>
    //Feature texts
    import {LL, locale} from "$i18n/i18n-svelte";

    const features = [
        {
            title: $LL.components.features.title1(),
            text: $LL.components.features.text1()
        },
        {
            title: $LL.components.features.title2(),
            text: $LL.components.features.text2()
        },
        {
            title: $LL.components.features.title3(),
            text: $LL.components.features.text3()
        },
        {
            title: $LL.components.features.title4(),
            text: $LL.components.features.text4()
        },
        {
            title: $LL.components.features.title5(),
            text: $LL.components.features.text5()
        },
        {
            title: $LL.components.features.title6(),
            text: $LL.components.features.text6()
        },
    ]
</script>

<div class="features">
    {#each features as card}
        <div class="layered-shadow">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
        </div>
    {/each}
</div>

<style lang="scss">
  .features {
    margin: 1rem 0;
    display: grid;
    grid-gap: 1rem;
    transition: 250ms ease-in-out all;
    grid-template-columns: repeat(12, minmax(0, 1fr));


    div {
      grid-column: span 4 / span 4;
      padding: 1.25rem;
      min-height: 200px;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 0.4rem;
      transition: 250ms ease-in-out all;

      @media only screen and (max-width: 1000px) {
        grid-column: span 6 / span 6;
      }

      @media only screen and (max-width: 680px) {
        grid-column: span 12 / span 12;
        min-height: 180px;
      }
    }

    p {
      margin-top: 5px;
    }

    h2 {
      margin: 0;
      font-size: 1.25em;
    }
  }
</style>