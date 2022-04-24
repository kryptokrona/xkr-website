<script>

import DownloadWallet from "$lib/components/DownloadWallet.svelte";
</script>

<svelte:head>
    <title>Kryptokrona | Wallet</title>
    <meta name="description" content=""/>
</svelte:head>

<div class="wrapper">
    <DownloadWallet/>
</div>

<style lang="scss">
  .wrapper {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 20px;
  }
</style>