<script>
    import Faucet from "/src/lib/components/Faucet.svelte";
</script>

<svelte:head>
    <title>Kryptokrona - Get crypto from our faucet</title>
    <meta property="og:site_name" content="Kryptokrona" />
    <meta name="description"
          content="To get started with Hugin you need a few coins, here you're able to claim 5 XKR for free">
    <meta property="og:title" content="Kryptokrona - Get crypto from our faucet"/>
    <meta property="og:description" content="To get started with Hugin you need a few coins, here you're able to claim 5 XKR for free"/>
    <meta property="og:image" content="https://kryptokrona.org/ogfaucet.png">
    <meta property="og:url" content="https://kryptokrona.org/faucet" />
    <meta property="og:locale" content="en" />
    <link rel="alternate" href="https://kryptokrona.org/faucet" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/faucet" hreflang="x-default"/>
</svelte:head>

<div class="wrapper">
    <Faucet/>
</div>

<style lang="scss">

    .wrapper {
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

</style>