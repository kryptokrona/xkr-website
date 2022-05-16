<script>
    import MiningConfig from "$lib/components/MiningConfig.svelte";
    import JoinDiscord from "$lib/components/JoinDiscord.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import MiningCalc from "$lib/components/MiningCalc.svelte";
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<div class="wrapper">
    <h1>Benchmarks</h1>
    <br>
    
<style lang="scss">

    .wrapper {
      margin-top: 160px;
      margin-bottom: 40px;
      box-sizing: border-box;
      font-family: "Roboto Mono";
      
    
    }
    .tbl, tr, th, .tbl td {
      border: 1px solid #2E2C2E;
      padding: 10px;
      color: #FFFFFF99;
      margin-left: auto;
      margin-right: auto;

    } 
    table.tbl {
      width: 300px; border-collapse: collapse;
      width: 100%;
    }
    .tbl th {
      background: #464346;
    }

</style>
