<script>
    import MiningConfig from "$lib/components/mining/MiningConfig.svelte";
    import MiningCalc from "$lib/components/mining/MiningCalc.svelte";
    import LinkButton from "../../../lib/components/buttons/LinkButton.svelte";
    import LL from "$i18n/i18n-svelte";
</script>

<svelte:head>
    <title>Kryptokrona - Get started with crypto mining</title>
    <meta property="og:site_name" content="Kryptokrona"/>
    <meta name="description"
          content="Start mining crypto today, here you'll find everything needed for mining kryptokrona">
    <meta property="og:title" content="Kryptokrona - Get started with crypto mining"/>
    <meta property="og:description"
          content="Start mining crypto today, here you'll find everything needed for mining kryptokrona"/>
    <meta property="og:image" content="https://kryptokrona.org/ogmining.png">
    <meta property="og:url" content="https://kryptokrona.org/mining"/>
    <meta property="og:locale" content="en"/>
    <link rel="alternate" href="https://kryptokrona.org/mining" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/mining" hreflang="x-default"/>
</svelte:head>

<div class="wrapper container">
    <h1>{$LL.mining.title()}</h1>
    <p>{$LL.mining.mainText()}</p>
    <h2>{$LL.mining.title2()}</h2>
    <p>{$LL.mining.text2()}</p>
    <LinkButton url="https://kryptokrona.org/benchmarks" target="_blank" enabled={false} text="Kryptokrona Benchmarks"/>
    <h2>{$LL.mining.title3()}</h2>
    <p>{$LL.mining.text3()}</p>
    <LinkButton url="https://xmrig.com/download" target="_blank" enabled={false} text="Download XMRig"/>
    <div class="tools">
        <MiningConfig/>
        <MiningCalc/>
    </div>
</div>

<style lang="scss">

  .wrapper {
    margin-top: 160px;
    margin-bottom: 40px;
    box-sizing: border-box;

    @media screen and (max-width: 568px) {
      margin-top: 60px;
    }
  }

  .text-wrapper {
    margin-bottom: 60px;
  }

  .tools {
    display: flex;
    gap: 1rem;
    margin: 4rem 0;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

</style>
