<body>
  <div class="wrapper">
    <h1>Benchmarks for AMD processors</h1>
    <br>
    <table class="tbl">
        <thead>
          <tr>
            <th>CPU</th>
            <th onclick="sortColumn">Hashrate in h/s</th>
          </tr>
        </thead>
        <tbody id="tableData"></tbody>
      </table>
  </div>

<script>
  let sortDirection = false;
    let benchmarkData = [
        { device: 'AMD A8-7410', hashrate: 1000 },
        { device: 'AMD FX 8350', hashrate: 4230 },
        { device: 'AMD Ryzen 3900X', hashrate: 25000 },
        { device: 'AMD Ryzen 5800X', hashrate: 17000 },
        { device: 'AMD Ryzen 5 2600', hashrate: 12000 },
        { device: 'AMD Ryzen 5 3600', hashrate: 31 },
        { device: 'AMD Ryzen 5 5600x', hashrate: 10500 },
        { device: 'AMD Ryzen 9 3900x', hashrate: 22500 },
        { device: 'AMD Ryzen 9 3900xt', hashrate: 22500 },
        { device: 'AMD Ryzen 5 2600', hashrate: 9500 },
        { device: 'AMD Ryzen 9 5900x 24 threads', hashrate: 25000 },
        { device: 'AMD Ryzen 9 5900x 32 threads', hashrate: 31500 },
    ]

    window.onload = () => {
        loadTableData(benchmarkData);
    }

  function loadTableData(benchmarkData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let benchmark of benchmarkData) {
      dataHtml += `<tr><td>${benchmark.device}</td><td>${benchmark.hashrate}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
  }

  function sortColumn(columnName) {
    const dataType = typeof benchmarkData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
      case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
    }

    loadTableData(benchmarkData);
  }

  function sortNumberColumn(sort, columName) {
    benchmarkData = benckmarkData.sort((p1, p2) => {
      return sort ? p1[columName] - p2[columnName] : p2[columnName] - p1[columName]
    });
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
    table.tbl {
      width: 300px; border-collapse: collapse;
      width: 100%;
    }
    .tbl th {
      background: #464346;
    }
    
  </style>
</body>

<!--
  <tbody>
        <tr>
          <td>AMD A8-7410</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>AMD Ryzen 3900X</td>
          <td>25000</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>AMD Ryzen 5800X</td>
          <td>17000</td>
        </tr>
        <tr>
          <td>AMD Ryzen 5 2600</td>
          <td>12000</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>AMD Ryzen 5 3600</td>
          <td>10500</td>
        </tr>
        <tr>
          <td>AMD Ryzen 5 5600x</td>
          <td>13500</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
         <td>AMD Ryzen 9 3900x</td>
          <td>22500</td>
        </tr>
        <tr>
          <td>AMD Ryzen 9 3900xt</td>
          <td>22500</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>AMD Ryzen 5 2600</td>
          <td>9500</td>
        </tr>
        <tr>
          <td>AMD Ryzen 9 5900x 24 threads</td>
          <td>25000</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>AMD Ryzen 9 5900x 32 threads</td>
          <td>31500</td>
        </tr>
        <tr>
          <td>AMD FX 8350</td>
          <td>4230</td> 
        -->
