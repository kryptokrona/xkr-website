<script>
    import MiningConfig from "../../lib/components/MiningConfig.svelte";
    import JoinDiscord from "../../lib/components/JoinDiscord.svelte";
    import StatusBar from "../../lib/components/StatusBar.svelte";

</script>

<div class="wrapper">
    <h1>Mining</h1>
    <MiningConfig/>
</div>
<JoinDiscord/>
<StatusBar/>

<svelte:head>
    <title>Kryptokrona | Mining</title>
    <meta name="description" content=""/>
</svelte:head>

<style lang="scss">

    .wrapper {
      margin-top: 200px;
      margin-bottom: 40px;
    }

</style>