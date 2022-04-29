<script>
    import supabase from "../db.js";
    import {quadInOut} from "svelte/easing";
    import {draw} from "svelte/transition";

    let email
    let submitted
    let validEmail

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
                    email: input,
                })
            if (error) throw new Error(error.message);
        } else alert('Incorrect Email')
    }

    $: {
            validEmail = validateEmail(email)
    }

</script>

<div class="wrapper">
    <div class="card">
        {#if !submitted}
        <h2>Sign up for our newsletter.</h2>
        <form name="Portfolio Contact" method="POST" on:submit|preventDefault={() => handleSubmit(email)}>
            <input placeholder="satoshi@nakamoto.org" required type="email" bind:value={email}>
            <button class:enabled={validEmail} disabled={!email} type="submit" value="Submit">Sign up</button>
        </form>
            {:else if submitted}
            <svg height="50" viewBox="0 0 39 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-22.000000, -90.000000)">
                        <g id="Group" transform="translate(22.000000, 90.000000)">
                            <circle in:draw="{{duration:500, easing: quadInOut}}" id="Oval" stroke="#FFFFFF" cx="18" cy="18" r="17.5"></circle>
                            <polyline in:draw="{{delay: 400, duration:500, easing: quadInOut}}" id="Path-21" stroke="#5FF281" stroke-width="4" points="5.95621433 15.5887425 16.5354686 26.0217669 36.9562143 2.30607246"></polyline>
                        </g>
                    </g>
                </g>
            </svg>
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
      height: 100px;
      @media only screen and (max-width: 700px){
        height: 140px;
        padding: 30px 20px 30px 20px;
      }

      h2 {
        font-size: 1.25rem;
        margin-top: 0;
        margin-bottom: 30px;
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
        margin-bottom: 10px;
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
      padding: 10px 10px;
      height: 36px;
      width: 100px;
      cursor: pointer;
      transition: 250ms ease-in-out;

      &:hover {
        background-color: var(--card-border);
      }
    }

    .enabled {
      background-color: #34b26b;
      border-color: #3fd782;
      color: white;

      &:hover{
        background-color: #41ff93;
      }
    }
</style>