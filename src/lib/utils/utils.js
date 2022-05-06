
////////////////////////// Add commas to big numbers
export function numberWithCommas(numbers) {
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

////////////////////////// GENERATE MINING CONFIG
export const generateConfig = (address) => {
    // fetches the array of pools
    fetch("https://raw.githubusercontent.com/Swepool/kryptokrona-pools/main/pools.json")
        .then(res => res.json())
        .then(data => {
            //if there's something we generate a file, this could be improved.. for example check the address.
            if (address) {
                downloadObjectAsJson(generateFile(randomPool(data.pools), address), "config")
            } else {
                //if empty send alert
                alert("Fill in wallet address to generate config.json")
            }
        })
}

//Randomises the pool and returns it
function randomPool(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

//Generates the config.json and makes it downloadable
function downloadObjectAsJson(exportObj, exportName) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

//The json file
function generateFile(pool, user) {
    return JSON.parse(
        `{
    "api": {"id": null, "worker-id": null},
    "http": {"enabled": false, "host": "127.0.0.1", "port": 0, "access-token": null, "restricted": true},
    "autosave": true,
    "background": false,
    "colors": true,
    "randomx": {"init": -1, "mode": "auto", "1gb-pages": false, "rdmsr": true, "wrmsr": true, "numa": true},
    "cpu": {
        "enabled": true,
        "huge-pages": true,
        "hw-aes": null,
        "priority": null,
        "memory-pool": false,
        "yield": true,
        "asm": true,
        "argon2-impl": null,
        "astrobwt-max-size": 550,
        "astrobwt-avx2": false,
        "argon2": [0, 1, 2, 3],
        "astrobwt": [0, 1, 2, 3],
        "cn": [[1, 0]],
        "cn-heavy": [[1, 0]],
        "cn-lite": [[1, 0], [1, 2]],
        "cn-pico": [[2, 0], [2, 1], [2, 2], [2, 3]],
        "rx": [0],
        "rx/arq": [0, 1, 2, 3],
        "rx/wow": [0, 2],
        "cn/0": false,
        "cn-lite/0": false,
        "rx/keva": "rx/wow"
    },
    "opencl": {
        "enabled": true,
        "cache": true,
        "loader": null,
        "platform": "AMD",
        "adl": true,
        "cn/0": false,
        "cn-lite/0": false
    },
    "cuda": {"enabled": true, "loader": null, "nvml": true, "cn/0": false, "cn-lite/0": false},
    "donate-level": 5,
    "donate-over-proxy": 1,
    "log-file": null,
    "pools": [{
        "algo": "cn-pico",
        "coin": null,
        "url": "${pool}",
        "user": "${user}",
        "pass": "x",
        "rig-id": null,
        "nicehash": false,
        "keepalive": false,
        "enabled": true,
        "tls": false,
        "tls-fingerprint": null,
        "daemon": false,
        "socks5": null,
        "self-select": null
    }],
    "print-time": 60,
    "health-print-time": 60,
    "retries": 5,
    "retry-pause": 5,
    "syslog": false,
    "tls": {
        "enabled": false,
        "protocols": null,
        "cert": null,
        "cert_key": null,
        "ciphers": null,
        "ciphersuites": null,
        "dhparam": null
    },
    "user-agent": null,
    "verbose": 0,
    "watch": true
}`
    )
}

////////////////////////// END