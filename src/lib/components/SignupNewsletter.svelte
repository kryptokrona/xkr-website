<script>
    import {quadInOut} from "svelte/easing";
    import {draw} from "svelte/transition";
    import Button from "./buttons/Button.svelte";
    import {locale} from "$i18n/i18n-svelte";

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

    //Submit email to DB and goto signup
    async function handleSubmit(input) {
        const req = await fetch('https://kryptokrona.directus.app/items/emails', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "email": input.toLowerCase(),
                "locale": $locale
            })
        })
        if (req.ok) {
            submitted = true
        }
    }

    $: {
        validEmail = validateEmail(email)
    }

</script>

<div class="card layered-shadow">
    {#if !submitted}
        <h2>Get on the mailing list</h2>
        <form name="Portfolio Contact" method="POST" on:submit|preventDefault={() => handleSubmit(email)}>
            <input placeholder="satoshi@nakamoto.org" required type="email" bind:value={email}>
            <Button disabled={!validEmail} text="Sign up" enabled={validEmail}/>
        </form>
    {:else if submitted}
        <svg height="50px" viewBox="0 0 39 39" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-94.000000, -112.000000)" stroke="#5FF281">
                    <g id="Group" transform="translate(94.500000, 112.500000)">
                        <circle in:draw="{{duration:500, easing: quadInOut}}" id="Oval-Copy" stroke-width="2"
                                cx="19" cy="19" r="18"></circle>
                        <path in:draw="{{delay: 300, duration:500, easing: quadInOut}}"
                              d="M10.1883362,19.8671433 L15.9540454,25.4415033 C16.1525741,25.6334433 16.4691115,25.6281022 16.6610515,25.4295735 C16.666592,25.4238429 16.6719946,25.4179806 16.6772547,25.4119917 L28.1883362,12.3060725 L28.1883362,12.3060725"
                              id="Path-21" stroke-width="3" stroke-linecap="round"
                              transform="translate(19.188336, 19.056072) rotate(-360.000000) translate(-19.188336, -19.056072) "></path>
                    </g>
                </g>
            </g>
        </svg>
    {/if}
</div>

<style lang="scss">

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: 0.4rem;
    padding: 40px 40px;
    @media only screen and (max-width: 700px) {
      padding: 30px 20px 30px 20px;
    }

    h2 {
      font-size: 1.25rem;
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;

      @media only screen and (max-width: 700px) {
        margin-bottom: 20px;
      }
    }

    form {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 700px) {
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
    width: 100%;
    max-width: 280px;

    @media only screen and (max-width: 700px) {
      margin-bottom: 10px;
    }

    &:focus {
      outline: none;
      border: 1px solid var(--title-color);
    }
  }
</style>