<script>
    import star from '/static/star.svg'
    import novastack from '/static/novastack-white.png'



    //Hero texts
    const title = 'A decentralized private communication and payment system.'
    const pitch = 'A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.'

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

<svelte:head>
    <title>Kryptokrona | Home</title>
    <meta name="description" content={pitch}/>
</svelte:head>





<div class="sponsor1">
    <div>
        <h1>Our sponsors</h1>
        <h2>Novastack Hosting is a proud sponsor of the Kryptokrona project</h2>
        <div>
            <div class="list-item">
                <img src={star} alt="star" height="16px" style="margin-top: 5px">
                <p>Novastack Hosting provides special prices for VPS, and is used to power the development for Kryptokrona!</p>
            </div>
            <div class="list-item">
                <img src={star} alt="star" height="16px" style="margin-top: 5px">
                <p>Whether you are looking for a personal VPS hosting plan
                    or a business website hosting plan, Novastack can help you with it. 
                    Novastacks powerful server services will not only help you achieve your overall goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure hosting platform.</p>
            </div>
        </div>
    </div>
    <div class="image2">
        <img src={novastack} alt="kryptokrona mining">
    </div>
</div>

<style lang="scss">

  
 

  .sponsor1 {
    margin: 160px 0;
    display: flex;
    align-items: center;
    gap: 60px;

    h1 {
      margin-top: 20px;
      font-size: 250%;
      margin-bottom: 40px;
    }
    h2 {
        margin-bottom: 40px;
        font-size: 160%;
    }



    .list-item {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 20px;
      gap: 10px;

      p{
        margin: 0;
        font-size: 125%;
      }
    }
    .image {
      display: flex;
      justify-content: right;

      
    }
    .image2 {
      display: flex;
      justify-content: right;
      margin-right: 70px;
      order: -1;
      width: 500px;
      height: 500px;


      
      
    }
  }

</style>