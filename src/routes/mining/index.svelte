<script>
    import MiningConfig from "$lib/components/MiningConfig.svelte";
    import JoinDiscord from "$lib/components/JoinDiscord.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import MiningCalc from "$lib/components/MiningCalc.svelte";
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<svelte:head>
    <title>Kryptokrona - Get started with crypto mining</title>
    <meta property="og:site_name" content="Kryptokrona" />
    <meta name="description"
          content="Start mining crypto today, here you'll find everything needed for mining kryptokrona">
    <meta property="og:title" content="Kryptokrona - Get started with crypto mining"/>
    <meta property="og:description" content="Start mining crypto today, here you'll find everything needed for mining kryptokrona"/>
    <meta property="og:image" content="https://kryptokrona.org/ogmining.png">
    <meta property="og:url" content="https://kryptokrona.org/mining" />
    <meta property="og:locale" content="en" />
    <link rel="alternate" href="https://kryptokrona.org/mining" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/mining" hreflang="x-default"/>
</svelte:head>

<div class="wrapper">
    <h1>Mining</h1>

    <div class="text-wrapper">
        <p>Kryptokrona is a cryptocurrency that relies on proof-of-work mining to achieve distributed consensus. It utilizes the Cryptonight Turtle algorithm. This algorithm is primarily mined on CPUs and is ASIC resistant. With Kryptokrona being ASIC resistant, the whole network gets decentralized. This means that the algorithm is purposefully designed to stop mining from being dominated by a set of specialized miners with the most expensive equipment. Therefore Kryptokrona should be easily mineable through "regular" computers.</p>
        <h2>Hardwate for mining</h2>
        <p>You can mine Kryptokrona on CPUs, GPUs & Android Phones. Compare your hashrate to others, and even help expand the list!</p>
        <br>
        <LinkButton url="https://kryptokrona.org/benchmarks" target="_blank" enabled={false} text="Kryptokrona Benchmarks"/> 
        <br>
        <br>
        <h2>Software</h2>
        <p>There are several options when it comes to mining software.The most common mining software for mining such algorithms is XMRig. Guide on how to mine XKR is coming up soon.</p>
    </div>

    <LinkButton url="https://xmrig.com/download" target="_blank" enabled={false} text="Download XMRig"/>

    <div class="tools">
        <MiningConfig/>
        <MiningCalc/>
    </div>

    <div class="text-wrapper">
      <h2>Don't want to mine?</h2>
      <p>Buy XKR here. We are working on listing XKR at other places.</p>
    </div>
    <LinkButton url="https://kryptokrona.org/blog/how-to-buy-xkr" target="_blank" enabled={false} text="Guide on how to buy XKR"/> 
    <br>
    <br>
    <br>

    <div class="text-wrapper">
      <h2>Support</h2>
        <p>Join our community</p>
    </div>
    <div class=""></div>
    <JoinDiscord/>
    <StatusBar/>
    
    
</div>


<svelte:head>
    <title>Kryptokrona | Mining</title>
    <meta name="description" content=""/>
</svelte:head>

<style lang="scss">

  .wrapper {
    margin-top: 160px;
    margin-bottom: 40px;
    box-sizing: border-box;
  }

  .text-wrapper {
    margin-bottom: 40px;
  }

  .tools {
    display: flex;
    gap: 40px;
    margin: 80px 0;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

</style>
