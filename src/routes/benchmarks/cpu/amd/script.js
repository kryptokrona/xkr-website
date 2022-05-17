    let sortDirection = false;
    let benchmarkData = [
        { device: 'Test', hashrate: 50 },
        { device: 'Test', hashrate: 25 },
        { device: 'Test', hashrate: 31 },
        { device: 'Test', hashrate: 2 },
        { device: 'Test', hashrate: 82 },
        { device: 'Test', hashrate: 31 },
        { device: 'Test', hashrate: 31 },
        { device: 'Test', hashrate: 31 },

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
