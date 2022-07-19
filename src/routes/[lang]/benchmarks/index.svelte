<svelte:head>
    <title>Kryptokrona | Benchmarks</title>
    <meta name="description" content="Benchmarks in h/s for Kryptokrona. Information gathered in #mining-benchmarks in the Discord server."/>
</svelte:head>

<script>
    import LinkButton from "../../../lib/components/buttons/LinkButton.svelte";
    import JoinDiscord from "$lib/components/JoinDiscord.svelte";
</script>

<div class="wrapper">
    <div class="info-top">
        <h1>Benchmarks for Kryptokrona</h1>
        <p>Here are all of the hardware that have been mining Kryptokrona on XMrig.</p>
        <p>Compare your own hashrates to other people. Some hashrates will vary so you need to take it with a grain of salt. Note that everyone is not lucky in the silicon lottery and your hashrates will vary from other ones in this list.</p>
        <p>Remember you can contribute to this list! We need people like you to fill in your own hashrates to make the list more accurate.</p>
    </div>
    <LinkButton url="/benchmarks/cpu/amd" enabled={false} text="Hashrates for AMD CPUs"/>
    <LinkButton url="/benchmarks/cpu/intel" enabled={false} text="Hashrates for Intel CPUs"/>
    <LinkButton url="/benchmarks/gpu" enabled={false} text="Hashrates for GPUs"/>
    <div class="info-bottom">
        <p>You can contribute by joining the Discord server and post your hashrates either in #mining-benchmarks or dm #Hoover2245. Your pictures should show your xmrig running and system info. If you got some overclocks to it, show it too. After some time your own hashrates will be up and running for everyone to see!</p>
    </div>
</div>
<JoinDiscord/>
<p style="margin-top: 40px;">Disclaimer: Methods described may be proven harmful to your PC if you’re not fully aware of your actions. Any action you take upon overclocking your system is strictly at your own risk.</p>
<br>
<p>Made by Daniel Boye</p>

<style lang="scss">
    .wrapper {
      margin-top: 160px;
      margin-bottom: 40px;
      box-sizing: border-box;
      font-family: "Roboto Mono";
    }
    .info-top {
        margin-bottom: 30px;
    }
    .info-bottom {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    
</style>