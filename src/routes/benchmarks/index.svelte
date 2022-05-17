<script>
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<div class="wrapper">
    <h1>Benchmarks for Kryptokrona</h1>
    <br>
    <LinkButton url="/benchmarks/cpu/amd" target="_blank" enabled={false} text="Hashrates for AMD CPUs"/>
    <LinkButton url="/benchmarks/cpu/intel" target="_blank" enabled={false} text="Hashrates for Intel CPUs"/>
    <LinkButton url="/benchmarks/gpu" target="_blank" enabled={false} text="Hashrates for GPUs"/>
</div>

<style lang="scss">
    .wrapper {
      margin-top: 160px;
      margin-bottom: 40px;
      box-sizing: border-box;
      font-family: "Roboto Mono";
    }
</style>
