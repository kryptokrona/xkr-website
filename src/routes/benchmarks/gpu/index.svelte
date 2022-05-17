<div class="wrapper">
	<h1>Benchmarks all types of graphics cards</h1>
	<br>
<table class="tbl">
	<thead>
		<tr>
			<th on:click={sort("device")}>GPU</th>
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
		{device:"AMD RX 5700XT", hashrate:11000},
    {device:"NVIDIA Quadro K620", hashrate:600},
    {device:"NVIDIA GTX 970", hashrate:3200},
    {device:"NVIDIA GTX 1650", hashrate:2666},
    {device:"NVIDIA GTX 1060 6gb", hashrate:3500},
    {device:"NVIDIA GTX 1660 super", hashrate:4200},
    {device:"NVIDIA GTX 1070ti", hashrate:5200},
    {device:"NVIDIA RTX 3070", hashrate:14150},
    {device:"NVIDIA RTX 3090", hashrate:24000},
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

