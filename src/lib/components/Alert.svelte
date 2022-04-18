<script>

    //Add alert text here
    // eslint-disable-next-line no-unused-vars
    let alertText

    //Add a link to your alert
    // eslint-disable-next-line no-unused-vars
    let link

</script>

<div class="strip rgb" class:alert={alertText}>
    {#if alertText}
        <div class="wrapper">
            <p>{alertText}
                {#if link}
                    <a href={link}> Link</a>
                {/if}
            </p>
        </div>
    {/if}
</div>

<style lang="scss">

  .strip {
    width: 100%;
    height: 3px;
  }

  .alert {
    height: 40px;
  }

  .wrapper {
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
      color: white;
    }

    a {
      color: white;
      cursor: pointer;
      text-decoration: underline;
    }
  }

</style>