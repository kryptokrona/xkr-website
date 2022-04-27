<script>

    let email

    const handleSubmit = () => {

    }

</script>

<div class="wrapper">
    <div class="card">
        <h2>Sign up for our newsletter</h2>
        <form name="Portfolio Contact" method="POST" on:submit|preventDefault={() => handleSubmit()}>
            <input placeholder="satoshi@nakamoto.org" type="text" bind:value={email}>
            <button class:border_rgb={email} disabled="true" type="submit" value="Submit">Sign up</button>
        </form>
    </div>
</div>

<style lang="scss">
  .wrapper {
    margin-top: 40px;
  }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      border-radius: 0.4rem;
      padding: 40px;
      @media only screen and (max-width: 700px){
        padding: 30px 20px 30px 20px;
      }

      h2 {
        margin-top: 0;
        margin-bottom: 40px;
        text-align: center;

        @media only screen and (max-width: 700px){
          margin-bottom: 20px;
        }
      }

      form {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 700px){
          flex-direction: column;
        }
      }
    }

    input {
      box-sizing: border-box;
      background-color: var(--backgound-color);
      border: 1px solid var(--border-color);
      border-radius: 0.4rem;
      color: var(--title-color);
      padding: 0 10px;
      height: 36px;
      width: 280px;

      @media only screen and (max-width: 700px){
        margin-bottom: 20px;
      }

      &:focus {
        outline: 1px solid var(--title-color);
        border: 1px solid var(--title-color);
      }
    }

    button {
      background-color: var(--card-background);
      border: 1px solid var(--border-color);
      color: var(--text-color);
      border-radius: 0.4rem;
      padding: 10px 20px;
      height: 36px;
      width: 150px;
      cursor: pointer;
      transition: 250ms ease-in-out;

      &:hover {
        background-color: var(--card-border);
      }
    }
</style>