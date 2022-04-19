<script>
    import { generateConfig } from "/src/lib/utils.js";
    let address

</script>

<div class="wrapper">
    <input type="text" bind:value={address}>
    <button on:click={() => generateConfig(address)}>Generate</button>
</div>

<style lang="scss">

</style>