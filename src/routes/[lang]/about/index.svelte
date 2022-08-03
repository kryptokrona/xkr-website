<script>
    import StatusBar from "$lib/components/StatusBar.svelte";
    import {network} from "$lib/stores/store";
    import LL from "$i18n/i18n-svelte";

    const about = [
        {
            title: $LL.about.title2(),
            text: $LL.about.text2()
        },
        {
            title: $LL.about.title3(),
            text: $LL.about.text3()
        },
        {
            title: $LL.about.title4(),
            text: $LL.about.text4()
        },
        {
            title: $LL.about.title5(),
            text: $LL.about.text5()
        },
        {
            title: $LL.about.title6(),
            text: $LL.about.text6()
        },

    ]
</script>

<svelte:head>
    <title>Kryptokrona - About us</title>
    <meta property="og:site_name" content="About Kryptokrona" />
    <meta name="description"
          content="Here you can read more about the project">
    <meta property="og:title" content="Kryptokrona - About us"/>
    <meta property="og:description" content="Here you can read more about the project"/>
    <meta property="og:image" content="https://kryptokrona.org/ogabout.png">
    <meta property="og:url" content="https://kryptokrona.org/about" />
    <meta property="og:locale" content="en" />
    <link rel="alternate" href="https://kryptokrona.org/about" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/about" hreflang="x-default"/>
</svelte:head>

<div class="container">
    <div class="text-wrapper">
        <h1>{$LL.about.title()}</h1>
        <h2>{$LL.about.subTitle()}</h2>
        <p>{$LL.about.mainText1()}</p>
        <p>{$LL.about.mainText2()}</p>
        <p>{$LL.about.mainText3()}</p>
    </div>
    <div class="features">
        <div>
            <h2>{$LL.about.maxSupply()}</h2>
            <p>1,000,000,000 XKR</p>
            <h2>{$LL.about.currentSupply()}</h2>
            <p>{$network.supply} XKR</p>
        </div>
        {#each about as card}
            <div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
            </div>
        {/each}
    </div>
    <StatusBar/>
</div>

<style lang="scss">

  .text-wrapper {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    p {
      margin-top: 10px;
    }

    h1 {
      margin: 0;
    }

    @media screen and (max-width: 568px) {
      margin-top: 60px;
    }

  }

  .features {
    margin: 40px auto;
    display: grid;
    grid-gap: 1rem;
    transition: 250ms ease-in-out all;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div {
      padding: 1.25rem;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 0.4rem;
      transition: 250ms ease-in-out all;
    }

    h2 {
      margin: 0;
      font-size: 1.25em;
    }
  }

</style>