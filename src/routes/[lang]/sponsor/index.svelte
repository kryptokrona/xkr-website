<script>
    import LinkButton from "$lib/components/buttons/LinkButton.svelte";
    import star from '/static/star.svg'
    import novastack from '/static/novastack-white.png'
</script>

<div class="sponsor">
    <div class="text">
        <h1>Our sponsors</h1>
        <h2>Novastack Hosting is a proud sponsor of the Kryptokrona project</h2>
        <div>
            <div class="novastack-desc">
                <img src={star} alt="star" height="16px" style="margin-top: 5px">
                <p>Novastack Hosting provides special prices for VPS, and is used to power the development for Kryptokrona!</p>
            </div>
            <div class="novastack-desc">
                <img src={star} alt="star" height="16px" style="margin-top: 5px">
                <p>Whether you are looking for a personal VPS hosting plan or a business website hosting plan, Novastack can help you with it. Novastacks powerful server services will not only help you achieve your overall goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure hosting platform.</p>
            </div>
            <br/>
            <br/>
            <LinkButton text="Read more" enabled={true} url="https://novastack.org/"/>
        </div>
    </div>
    <div class="novastack">
        <img src={novastack} alt="novastack-logo">
    </div>
</div>

<style lang="scss">
  .sponsor {
    margin: 200px 0;
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      margin-top: -80px;
      font-size: 250%;
    }

    h2 {
        font-size: 160%;
    }

    @media only screen and (max-width: 900px) {
      flex-direction: column;
      h2 {
        margin-top: 40px;
        font-size: 160%;
        
      }
      h1 {
          margin-top: 40px;
          font-size: 200%;
      }
      p {
        font-size: 100%;
      }
    }

    text {
      order: 1;
    }

    .novastack-desc {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 20px;
      gap: 10px;

      p{
        margin: 0;
        font-size: 115%;
      }
    }

    .novastack {
      display: flex;
      justify-content: right;
      margin-right: 50px;
      order: -1;

      @media only screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        max-width: 80%;
        margin: 0 auto;
        order: -1;
      }
    }
  }
</style>