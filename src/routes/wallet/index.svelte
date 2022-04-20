<script>
    import {onMount} from "svelte";

    let latest_mac;
    let latest_win;
    let latest_lin;
    let backup = 'https://github.com/kryptokrona/hugin-messenger'

    onMount(() => {
        fetch("https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/latest")
            .then((response) => response.json())
            .then((data) => {
                let files = data.assets;
                for (file in files) {
                    if (files[file].name.slice(files[file].name.length - 7) === "mac.zip") {
                        latest_mac = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 3) === "exe") {
                        latest_win = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 8) === "AppImage") {
                        latest_lin = files[file].browser_download_url;
                    }
                }
                console.log(latest_mac, latest_lin, latest_win)
            });
    })

    $: {
        latest_lin = undefined ? latest_lin : backup
        latest_mac = undefined ? latest_mac : backup
        latest_win = undefined ? latest_win : backup
    }
</script>

<svelte:head>
    <title>Kryptokrona | Wallet</title>
    <meta name="description" content=""/>
</svelte:head>