<script>
    import StatusBar from "$lib/components/StatusBar.svelte";
    import {network} from "$lib/stores/store";

    const about = [
        {
            title: "GPU Mining Algorithm",
            text: "We currently running on CryptoNight-Pico, which is a fairer algo than Bitcoin's SHA256 and can even be competently mined on ARM based phones!"
        },
        {
            title: "Blocktime",
            text: "Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay."
        },
        {
            title: "Untraceable",
            text: "XKR transactions make use of ring signatures and stealth addresses to keep prying eyes off of your private transactions!"
        },
        {
            title: "Fungible",
            text: "The Kryptokrona isn’t dependent on our central banks or servers, thus less fragile than todays financial systems."
        },
        {
            title: "Drama-free emission curve",
            text: "Our network reduces the amount of new coins minted with every block, making for a drama-free emission."
        }
    ]
</script>

<svelte:head>
    <title>Kryptokrona - About us</title>
    <meta property="og:site_name" content="About Kryptokrona" />
    <meta name="description"
          content="Here you can read more about the project">
    <meta property="og:title" content="Kryptokrona - About us"/>
    <meta property="og:description" content="Here you can read more about the project"/>
    <meta property="og:image" content="https://kryptokrona.org/ogabout.png">
    <meta property="og:url" content="https://kryptokrona.org/about" />
    <meta property="og:locale" content="en" />
    <link rel="alternate" href="https://kryptokrona.org/about" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/about" hreflang="x-default"/>
</svelte:head>

<div class="text-wrapper">
    <h1>About</h1>
    <h2>Money for the future</h2>
    <p>Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be
        expensive or slow. We work with open source code that allows you to be involved and improve the money of the
        future.</p>
    <p>Kryptokrona is a decentralized blockchain based on CryptoNote, which forms the basis for Monero, among others.
        CryptoNote is a so-called “application layer” protocol further developed by TurtleCoin that enables things like:
        private transactions, messages and arbitrary data storage, completely decentralized.</p>
    <p>On 2 April 2019, the platform was launched in part as a response to the Riksbank’s digital e-krona for the
        people’s
        right to create money and to safeguard the private economy without either commercial or store control.</p>
</div>
<div class="features">
    <div>
       <h2>Max Supply</h2>
        <p>1,000,000,000 XKR</p>
        <h2>Current Supply</h2>
        <p>{$network.supply} XKR</p>
    </div>
    {#each about as card}
        <div>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
        </div>
    {/each}
</div>
<StatusBar/>

<style lang="scss">

  .text-wrapper {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    p {
      margin-top: 10px;
    }

    h1 {
      margin: 0;
    }

  }

  .features {
    margin: 40px auto;
    display: grid;
    grid-gap: 1rem;
    transition: 250ms ease-in-out all;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div {
      padding: 1.25rem;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 0.4rem;
      transition: 250ms ease-in-out all;
    }

    h2 {
      margin: 0;
      font-size: 1.25em;
    }
  }

</style>