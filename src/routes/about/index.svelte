<script>
    import {draw, fade} from "svelte/transition";
    import StatusBar from "../../lib/components/StatusBar.svelte";
    import {onMount} from "svelte";
    import {numberWithCommas} from "../../lib/utils";
    import JoinDiscord from "../../lib/components/JoinDiscord.svelte";
    import {quadInOut} from "svelte/easing";

    let currentSupply
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

    onMount(() => {
        fetch("https://blocksum.org/api/v1/supply")
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch CoinPaprika")
                }
                return res.json()
            })
            .then(data => {
                currentSupply = numberWithCommas(data.supply.current)
            })
            .catch(err => console.log(err))
    })

</script>

<svelte:head>
    <title>Kryptokrona | About</title>
    <meta name="description" content=""/>
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
        right to create money and to safeguard the private economy without either commercial or state control.</p>
</div>
<div class="features">
    <div>
       <h2>Max Supply XKR</h2>
        <p>1,000,000,000</p>
        <h2>Current Supply</h2>
        <p>{currentSupply} XKR</p>
    </div>
    {#each about as card}
        <div>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
        </div>
    {/each}


    <svg width="600" viewBox="0 0 1004 475" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group-14">
                <line x1="337.5" y1="9.5" x2="338.5" y2="426.5" id="Line-3" stroke-opacity="0.1" stroke="#FFFFFF" stroke-linecap="square"></line>
                <line x1="664.5" y1="9.5" x2="665.5" y2="426.5" id="Line-3-Copy-2" stroke-opacity="0.1" stroke="#FFFFFF" stroke-linecap="square"></line>
                <line x1="989.5" y1="9.5" x2="990.5" y2="426.5" id="Line-3-Copy-3" stroke-opacity="0.1" stroke="#FFFFFF" stroke-linecap="square"></line>
                <line x1="13.5" y1="9.5" x2="14.5" y2="426.5" id="Line-3-Copy" stroke-opacity="0.1" stroke="#FFFFFF" stroke-linecap="square"></line>
                <path in:draw="{{duration: 3000, delay: 1000, easing: quadInOut}}" d="M13.0266485,352.116219 C36.1234073,331.490088 59.5418421,309.43291 83.2819526,285.944683 C163.541766,197.064569 275.8734,105.100247 337.262691,75.1835177 C420.902499,34.4234856 638.322927,14.0434696 989.523973,14.0434696" id="Path-19" stroke="#FFFFFF" stroke-width="3"></path>
                <circle in:fade="{{delay: 1500}}" id="Oval" stroke="#A65FF2" stroke-width="5" fill="#FFFFFF" cx="14" cy="351" r="11.5"></circle>
                <circle in:fade="{{delay: 1500}}" id="Oval-Copy-147" stroke="#5F86F2" stroke-width="5" fill="#FFFFFF" cx="338" cy="74" r="11.5"></circle>
                <circle in:fade="{{delay: 2500}}" id="Oval-Copy-148" stroke="#5FF2F0" stroke-width="5" fill="#FFFFFF" cx="665" cy="23" r="11.5"></circle>
                <circle in:fade="{{delay: 3000}}" id="Oval-Copy-149" stroke="#5FF281" stroke-width="5" fill="#FFFFFF" cx="990" cy="14" r="11.5"></circle>
                <text id="2020" font-family="Montserrat-Medium, Montserrat" font-size="24" font-weight="400" fill="#C5C5C5">
                    <tspan x="13" y="469">2020</tspan>
                </text>
                <text id="2030" font-family="Montserrat-Medium, Montserrat" font-size="24" font-weight="400" fill="#C5C5C5">
                    <tspan x="309" y="469">2030</tspan>
                </text>
                <text id="2040" font-family="Montserrat-Medium, Montserrat" font-size="24" font-weight="400" fill="#C5C5C5">
                    <tspan x="634" y="469">2040</tspan>
                </text>
                <text id="2050" font-family="Montserrat-Medium, Montserrat" font-size="24" font-weight="400" fill="#C5C5C5">
                    <tspan x="930" y="469">2050</tspan>
                </text>
            </g>
        </g>
    </svg>
</div>
<JoinDiscord/>
<StatusBar/>

<style lang="scss">

  .text-wrapper {
    margin-top: 150px;
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: 20px;
    }

    p {
      margin-top: 10px;
    }

    @media only screen and (max-width: 700px) {
      margin-top: 100px;
    }
  }

  .features {
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    transition: 250ms ease-in-out all;

    div {
      padding: 20px;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 8px;
      max-width: 26%;
      width: 100%;
      height: 160px;
      transition: 250ms ease-in-out all;

      @media only screen and (max-width: 1100px) {
        max-width: 40%;
        height: 170px;
      }

      @media only screen and (max-width: 700px) {
        max-width: 100%;
        height: 160px;
      }
    }

    p {
      margin-top: 5px;
    }

    h2 {
      margin: 0;
    }
  }

</style>