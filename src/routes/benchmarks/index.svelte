<svelte:head>
    <title>Kryptokrona | Benchmarks</title>
    <meta name="description" content="Benchmarks in h/s for Kryptokrona. Information gathered in #mining-benchmarks in the Discord server."/>
</svelte:head>

<script>
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<div class="wrapper">
    <h1>Benchmarks for Kryptokrona</h1>
    <br>
    <LinkButton url="/benchmarks/cpu/amd" enabled={false} text="Hashrates for AMD CPUs"/>
    <LinkButton url="/benchmarks/cpu/intel" enabled={false} text="Hashrates for Intel CPUs"/>
    <LinkButton url="/benchmarks/gpu" enabled={false} text="Hashrates for GPUs"/>
    <br>
    <br>
    <br>
    <p>Made by Daniel Boye</p>
</div>

<style lang="scss">
    .wrapper {
      margin-top: 160px;
      margin-bottom: 40px;
      box-sizing: border-box;
      font-family: "Roboto Mono";
    }
</style>