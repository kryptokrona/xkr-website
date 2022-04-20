<script>
    import JoinDiscord from "../lib/components/JoinDiscord.svelte";
    import StatusBar from "../lib/components/StatusBar.svelte";
    import {draw} from 'svelte/transition'
    import {quadInOut} from "svelte/easing";
    import FeaturedPosts from "../lib/components/FeaturedPosts.svelte";

    //Hero texts
    const title = 'A decentralized private communication and payment system.'
    const pitch = 'A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.'

    //Feature texts
    const features = [
        {
            title: "Nordic Crypto",
            text: "A growing cryptocurrency from the Nordics, you'll find people from Sweden, Norway, Denmark, Finland, but also an international audience."
        },
        {
            title: "Decentralized",
            text: "Kryptokrona adds value to the region as a robust decentralized payment and communication system. Securing our freedom as citizens."
        },
        {
            title: "Crypto Community",
            text: "Strong local roots with an understanding of politics, culture & language. A feature that should not be underestimated."
        },
        {
            title: "A response",
            text: "Kryptokrona launched as an open-source alternative to a digital e-krona/e-krone and the growing cashless society in the Nordics."
        },
        {
            title: "No middleman",
            text: "The Kryptokrona isn’t dependent on our central banks or servers, thus less fragile than todays financial systems."
        },
        {
            title: "Private ",
            text: "The basics of Kryptokrona allow users to stay anonymous by default, to send value and data without being revealed or traced."
        }
    ]
</script>

<svelte:head>
    <title>Kryptokrona | Home</title>
    <meta name="description" content={pitch}/>
</svelte:head>

<div class="hero">
    <svg width="100%" viewBox="0 0 155 52" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
        <g  id="Page-1" stroke="none" stroke-width="0.5" fill="none" fill-rule="evenodd">
            <g  id="XKR" transform="translate(1.648000, 0.600000)" fill-rule="nonzero" stroke="var(--title-color)">
                <polygon in:draw="{{duration: 3500, easing: quadInOut}}" id="Path"
                         points="37.872 50.4 24.192 31.248 10.656 50.4 0 50.4 18.72 24.696 1.008 0 11.592 0 24.48 17.928 37.224 0 47.376 0 29.736 24.336 48.672 50.4"></polygon>
                <polygon in:draw="{{duration: 2500, easing: quadInOut}}" id="Path"
                         points="73.368 29.304 65.376 37.512 65.376 50.4 56.016 50.4 56.016 0 65.376 0 65.376 25.848 90.288 0 100.8 0 79.632 22.536 102.096 50.4 91.152 50.4"></polygon>
                <path in:draw="{{duration: 4000, easing: quadInOut}}"
                      d="M141.48,50.4 L131.184,35.64 C130.752,35.688 130.104,35.712 129.24,35.712 L117.864,35.712 L117.864,50.4 L108.504,50.4 L108.504,0 L129.24,0 C133.608,0 137.412,0.72 140.652,2.16 C143.892,3.6 146.376,5.664 148.104,8.352 C149.832,11.04 150.696,14.232 150.696,17.928 C150.696,21.72 149.772,24.984 147.924,27.72 C146.076,30.456 143.424,32.496 139.968,33.84 L151.56,50.4 L141.48,50.4 Z M141.264,17.928 C141.264,14.712 140.208,12.24 138.096,10.512 C135.984,8.784 132.888,7.92 128.808,7.92 L117.864,7.92 L117.864,28.008 L128.808,28.008 C132.888,28.008 135.984,27.132 138.096,25.38 C140.208,23.628 141.264,21.144 141.264,17.928 Z"
                      id="Shape"></path>
            </g>
        </g>
    </svg>
    <h1>{title}</h1>
    <p>{pitch}</p>
    <StatusBar/>
</div>

<div class="features">
    {#each features as card}
        <div>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
        </div>
    {/each}
</div>

<JoinDiscord/>
<FeaturedPosts/>

<style lang="scss">

  .hero {
    margin-top: 200px;

    @media only screen and (max-width: 900px) {
      margin-top: 150px;
    }

    @media only screen and (max-width: 400px) {
      margin-top: 100px;
    }
    h1 {
      font-size: 2.25rem;

      @media only screen and (max-width: 900px) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 400px) {
        font-size: 1.5rem;
      }
    }
    p {
      margin-top: 20px;
    }
  }

  .features {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    transition: 250ms ease-in-out all;

    div {
      padding: 20px;
      border: 1px solid var(--card-border);
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