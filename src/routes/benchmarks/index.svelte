<script>
    import MiningConfig from "$lib/components/MiningConfig.svelte";
    import JoinDiscord from "$lib/components/JoinDiscord.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import MiningCalc from "$lib/components/MiningCalc.svelte";
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<div class="wrapper">
    <h1>Benchmarks</h1>

    <table class="tbl">
        <thead>
          <tr>
            <th>Device</th>
            <th>Hashrate in h</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot>
      </table>
</div>

<style lang="scss">

    .wrapper {
      margin-top: 160px;
      margin-bottom: 40px;
      box-sizing: border-box;
      font-family: "Roboto Mono";
      
    
    }
    .tbl, tr, th, .tbl td {
      border: 1px solid #2E2C2E;
      padding: 5px;
      color: #FFFFFF99;
      margin-left: auto;
      margin-right: auto;

    } 
    table.tbl {
      width: 300px; border-collapse: collapse;
    }
    .tbl th {
      background: #464346;
    }

</style>
