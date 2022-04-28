<script>
    import supabase from "../db.js";

    let email
    let submitted = false

    //Validate that input is a correct email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    //Submit email to DB
    async function handleSubmit(input) {
        if (validateEmail(input)) {
            submitted = true
            const {data, error} = await supabase
                .from('xkr-signups')
                .insert({
                    input
                })
            if (error) throw new Error(error.message);
        } else alert('Incorrect Email')
    }

</script>

<div class="wrapper">
    <div class="card">
        {#if !submitted}
        <h2>Sign up for our newsletter</h2>
        <form name="Portfolio Contact" method="POST" on:submit|preventDefault={() => handleSubmit(email)}>
            <input placeholder="satoshi@nakamoto.org" required type="email" bind:value={email}>
            <button class:border_rgb={email} disabled={!email} type="submit" value="Submit">Sign up</button>
        </form>
            {:else if submitted}
            <h2>Stay tuned for our next newsletter</h2>
        {/if}
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