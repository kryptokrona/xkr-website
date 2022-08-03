<script>
    import StatusBar from "$lib/components/StatusBar.svelte";
    import SignupNewsletter from "$lib/components/SignupNewsletter.svelte";
    import Hero from "../../lib/components/landing/Hero.svelte";
    import Features from "../../lib/components/landing/Features.svelte";
    import Mining from "../../lib/components/landing/Mining.svelte";
    import Community from "../../lib/components/landing/Community.svelte";
    import HuginChat from "../../lib/components/landing/HuginChat.svelte";

    //Hero texts
    const title = 'A decentralized private communication and payment system.'
    const pitch = 'A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.'


</script>

<svelte:head>
    <title>Kryptokrona</title>
    <meta property="og:site_name" content="Kryptokrona"/>
    <meta name="description"
          content="A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.">
    <meta property="og:title" content="Kryptokrona"/>
    <meta property="og:description"
          content="A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future."/>
    <meta property="og:image" content="https://kryptokrona.org/ogimage.png">
    <meta property="og:url" content="https://kryptokrona.org"/>
    <link rel="alternate" href="https://kryptokrona.org " hreflang="en"/>
    <meta property="og:locale" content="en"/>
</svelte:head>

<div class="container flex">
    <div>
        <Hero/>
        <StatusBar/>
        <Features/>
    </div>
    <HuginChat/>
    <Community/>
    <Mining/>
    <SignupNewsletter/>
</div>

<style lang="scss">

  .flex {
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

</style>