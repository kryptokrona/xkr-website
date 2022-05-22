<script>
	import MiningCalc from "$lib/components/MiningCalc.svelte";

	let array = [
	{device:"AMD A8-7410", hashrate:1000},
    {device:"AMD FX 8350", hashrate:4230},
    {device:"AMD Ryzen 3900X", hashrate:25000},
    {device:"AMD Ryzen 5800X", hashrate:17000},
    {device:"AMD Ryzen 5 2600", hashrate:12000},
    {device:"AMD Ryzen 5 3600", hashrate:10500},
    {device:"AMD Ryzen 5 5600x", hashrate:10500},
    {device:"AMD Ryzen 9 3900x", hashrate:22500},
    {device:"AMD Ryzen 9 3900xt", hashrate:22500},
    {device:"AMD Ryzen 5 2600", hashrate:9500},
    {device:"AMD Ryzen 9 5900x 24 threads", hashrate:25000},
    {device:"AMD Ryzen 9 5900x 32 threads", hashrate:31500},
	];
	
	let sortBy = {col: "hashrate", ascending: true};
	
	$: sort = (column) => {
		
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.col = column
			sortBy.ascending = true
		}
		
		let sortModifier = (sortBy.ascending) ? 1 : -1;
		
		let sort = (a, b) => 
			(a[column] < b[column]) 
			? -1 * sortModifier 
			: (a[column] > b[column]) 
			? 1 * sortModifier 
			: 0;
		
		array = array.sort(sort);
	}
</script>

<div class="wrapper">
	<h1>Benchmarks for AMD processors</h1>
	<br>
	<p>Click on the CPUs to sort them in alphabetic order, or click hashrates and sort from high to low.</p>
	<p>Remember that everyone is not lucky in the silicon lottery and your hashrates will vary from other ones in this list.</p>
	<br>
<table class="tbl">
	<thead>
		<tr>
			<th on:click={sort("device")}>CPU</th>
			<th on:click={sort("hashrate")}>Hashrate in h/s</th>
		</tr>
	</thead>
	<tbody>
		{#each array as row}
			<tr>
				<td on:click={sort("device")}>{row.device}</td>
				<td on:click={sort("hashrate")}>{row.hashrate}</td>
			</tr>
		{/each}
	</tbody>
</table>
</div>
<MiningCalc/>
<br>
<p>Made by Daniel Boye</p>

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

  .tbl {
  width: 300px; border-collapse: collapse;
  width: 100%;
  }

  .tbl th {
  background: #464346;
  }
  tr:hover {
  background: #575557;

  }

    
</style>

