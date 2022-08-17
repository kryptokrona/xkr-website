<script>
import DownloadWallet from "$lib/components/DownloadWallet.svelte";
</script>

<svelte:head>
    <title>Kryptokrona - Download a XKR wallet</title>
    <meta property="og:site_name" content="Kryptokrona" />
    <meta name="description"
          content="A selection of kryptokrona wallets, pick your preferred wallet and manke sure to back it up.">
    <meta property="og:title" content="Kryptokrona - Download a XKR wallet"/>
    <meta property="og:description" content="A selection of kryptokrona wallets, pick your preferred wallet and manke sure to back it up."/>
    <meta property="og:image" content="https://kryptokrona.org/ogwallet.png">
    <meta property="og:url" content="https://kryptokrona.org/wallet" />
    <meta property="og:locale" content="en" />
    <link rel="alternate" href="https://kryptokrona.org/wallet" hreflang="en"/>
</svelte:head>

<div class="wrapper container">
    <h1>Wallet</h1>

    <DownloadWallet/>
</div>

<style lang="scss">
  .wrapper {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    gap: 20px;

    h1 {
      margin: 0;
    }

    @media screen and (max-width: 568px) {
      margin-top: 60px;
    }
  }
</style>