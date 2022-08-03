<script>
    //Feature texts
    const features = [
        {
            title: "Nordic Crypto",
            text: "A growing cryptocurrency from the Nordics, with the vision ensure Nordic excellence in development of secure systems and economic tools."
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
            text: "The Kryptokrona isn’t dependent on any central bank or server, thus less fragile than today's financial systems."
        },
        {
            title: "Private ",
            text: "The basics of Kryptokrona allow users to stay anonymous by default, to send value and data without being revealed or traced."
        }
    ]
</script>

<div class="features">
    {#each features as card}
        <div>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
        </div>
    {/each}
</div>

<style lang="scss">
  .features {
    margin: 1rem 0;
    display: grid;
    grid-gap: 1rem;
    transition: 250ms ease-in-out all;
    grid-template-columns: repeat(12, minmax(0, 1fr));


    div {
      grid-column: span 4 / span 4;
      padding: 1.25rem;
      min-height: 200px;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 0.4rem;
      transition: 250ms ease-in-out all;

      @media only screen and (max-width: 1000px) {
        grid-column: span 6 / span 6;
      }

      @media only screen and (max-width: 680px) {
        grid-column: span 12 / span 12;
        min-height: 180px;
      }
    }

    p {
      margin-top: 5px;
    }

    h2 {
      margin: 0;
      font-size: 1.25em;
    }
  }
</style>