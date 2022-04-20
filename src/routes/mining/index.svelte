<script>
    import { generateConfig } from "/src/lib/utils.js";
    let address

</script>

<div class="wrapper">
    <h1>Mining</h1>
    <input type="text" bind:value={address}>
    <button on:click={() => generateConfig(address)}>Generate</button>
</div>

<svelte:head>
    <title>Kryptokrona | Mining</title>
    <meta name="description" content=""/>
</svelte:head>

<style lang="scss">

    .wrapper {
      margin-top: 200px;
    }

</style>