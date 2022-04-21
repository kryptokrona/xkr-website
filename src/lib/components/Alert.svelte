<script>

    //enable alert
    let setAlert = true

    //Add alert text here
    // eslint-disable-next-line no-unused-vars
    let alertText = "Munin v1.0 now live!"

    //Add a link to your alert
    // eslint-disable-next-line no-unused-vars
    let link = 'https//github.com'

    //Select type
    //Will change color depending on selection
    //Green
    let news = true
    //Blue
    let info
    //Red
    let warning
    //Yellow
    let alert

</script>

    {#if setAlert}
        <div class:warn={warning} class:alert={alert} class:info={info} class:news={news}>
            <div class="wrapper">
                <p>{alertText}
                    {#if link}
                        <a href={link} > Link</a>
                    {/if}
                </p>
            </div>
        </div>
    {:else}
        <div class="strip rgb"></div>
    {/if}

<style lang="scss">

  .strip {
    width: 100%;
    height: 3px;
  }

  .info {
    width: 100%;
    background-color: var(--info-color);
    max-height: 80px;
    padding: 10px 0;

    p, a {
      color: #ffffff;
    }
  }

  .warn {
    width: 100%;
    background-color: var(--warn-color);
    max-height: 80px;
    padding: 10px 0;

    p, a {
      color: #ffffff;
    }
  }

  .alert {
    width: 100%;
    background-color: var(--alert-color);
    max-height: 80px;
    padding: 10px 0;

    p, a {
      color: #000000;
    }
  }

  .news {
    width: 100%;
    background-color: var(--success-color);
    max-height: 80px;
    padding: 10px 0;

    p, a {
      color: #000000;
    }
  }

  .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--website-width);
    width: 100%;
    padding: 0 40px;
    height: 100%;

    @media only screen and (max-width: 600px) {
      padding: 0 20px;
    }

    p {
      margin: 0;
      font-size: 0.85rem;
    }

    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }

</style>