<div class="wrapper">
	<h1>Benchmarks for Intel processors</h1>
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

<script>
	let array = [
		{device:"Intel Xeon E3-1230 v2", hashrate:4172},
    {device:"Intel Xeon E5 2680 v3", hashrate:11500},
    {device:"Intel Xeon ES 2695 v2", hashrate:10000},
    {device:"Intel Xeon ES 2690", hashrate:7800},
    {device:"Intel Xeon ES 1241 v3", hashrate:5500},
    {device:"Intel g4930 dual core", hashrate:2300},
    {device:"Intel i5 4750s", hashrate:4147},
    {device:"Intel i5 10500", hashrate:8000},
    {device:"Intel i7 10700", hashrate:14000},
    {device:"Intel i7 6700k", hashrate:6700},
    {device:"Intel i7 3820", hashrate:6300},
    {device:"Intel i7 4770k", hashrate:5300},
    {device:"Intel i5 7400", hashrate:4100},
    {device:"Intel i7 7700", hashrate:6500},
    {device:"Intel i7 12700k", hashrate:22520},
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

