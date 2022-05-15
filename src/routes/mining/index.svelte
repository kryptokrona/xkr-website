<script>
    import MiningConfig from "$lib/components/MiningConfig.svelte";
    import JoinDiscord from "$lib/components/JoinDiscord.svelte";
    import StatusBar from "$lib/components/StatusBar.svelte";
    import MiningCalc from "$lib/components/MiningCalc.svelte";
    import LinkButton from "../../lib/components/buttons/LinkButton.svelte";
</script>

<div class="wrapper">
    <h1>Mining</h1>

    <div class="text-wrapper">
        <p>Kryptokrona is a cryptocurrency that relies on proof-of-work mining to achieve distributed consensus. It utilizes the Cryptonight Turtle algorithm. This algorithm is primarily mined on CPUs and is ASIC resistant. With Kryptokrona being ASIC resistant, the whole network gets decentralized. This means that the algorithm is purposefully designed to stop mining from being dominated by a set of specialized miners with the most expensive equipment. Therefore Kryptokrona should be easily mineable through "regular" computers.</p>
        <h2>Hardware</h2>
        <p>Kryptokrona can be mined on CPUs, GPUs & Android Phones. </p>
        <h2>Software</h2>
        <p>There are several options when it comes to mining software.The most common mining software for mining such algorithms is XMRig. Guide on how to mine XKR is coming up soon</p>
    </div>

    <LinkButton url="https://xmrig.com/download" target="_blank" enabled={true} text="Download XMRig"/>

    <div class="tools">
        <MiningConfig/>
        <MiningCalc/>
    </div>

    <div class="text-wrapper">
      <h2>Support</h2>
        <p>Join our community</p>
    </div>
    <div class=""></div>
    <JoinDiscord/>
    <StatusBar/>
    
    <div class="text-wrapper">
      <h2>Don't want to mine?</h2>
      <p>Buy XKR here. We are working on listing XKR at other places.</p>
    </div>
    <LinkButton url="https://kryptokrona.org/blog/how-to-buy-xkr" target="_blank" enabled={false} text="Guide on how to buy XKR"/> 
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
