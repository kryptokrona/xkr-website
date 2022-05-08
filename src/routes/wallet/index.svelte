<script>
import DownloadWallet from "$lib/components/DownloadWallet.svelte";
</script>

<svelte:head>
    <title>Kryptokrona | Wallet</title>
    <meta name="description" content=""/>
</svelte:head>

<div class="wrapper">
    <h1>Wallet</h1>

    <DownloadWallet/>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    gap: 20px;

    h1 {
      margin: 0;
    }
  }
</style>