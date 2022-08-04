<script>
    import {onMount} from "svelte";
    import Button from "$lib/components/buttons/Button.svelte";

    let status
    let inputValue
    let incomingUrl
    let captcha
    let enabled

    onMount(() => {

        const search = location.search;
        const params = new URLSearchParams(search);
        incomingUrl = params.get('address');

        fetch('https://blocksum.org/faucet/balance')
            .then(res => res.json())
            .then(data => {
                data.balance ? status = "Funds available 🥳" : status = 'No funds available 😭'
            })

        window.captchaCallback = res => {
            console.log(res)
            captcha = res
        };
    })

    $: {
        if (incomingUrl) {
            inputValue = incomingUrl
        }
        inputValue ? enabled = true : enabled = false
    }

    const submitForm = () => {

        const value = {
            "address": inputValue,
            "captcha": captcha
        }
        console.log(captcha)
        const json = JSON.stringify(value)

        fetch("https://blocksum.org/faucet/send", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.msg === "recent") {
                    status = ('Someone recently claimed, please wait a few seconds 🚨')
                    document.getElementById('status').style.color = '#ff2f40'
                } else if (data.msg === "claimed") {
                    status = (`You've already claimed 🚨`)
                    document.getElementById('status').style.color = '#ff2f40'
                } else if (data.msg === "sent") {
                    status = (`Sent ✅ ${data.tx}`)
                    document.getElementById('status').style.color = '#2fff6a'
                } else if (data.msg === "error") {
                    status = (data.errorMsg)
                    document.getElementById('status').style.color = '#ff2f40'
                }

            })
            .catch(e => console.log(e))
    }
</script>

<svelte:head>
    <title>Kryptokrona - Get crypto from our faucet</title>
    <meta property="og:site_name" content="Kryptokrona"/>
    <meta name="description"
          content="To get started with Hugin you need a few coins, here you're able to claim 5 XKR for free">
    <meta property="og:title" content="Kryptokrona - Get crypto from our faucet"/>
    <meta property="og:description"
          content="To get started with Hugin you need a few coins, here you're able to claim 5 XKR for free"/>
    <meta property="og:image" content="https://kryptokrona.org/ogfaucet.png">
    <meta property="og:url" content="https://kryptokrona.org/faucet"/>
    <meta property="og:locale" content="en"/>
    <link rel="alternate" href="https://kryptokrona.org/faucet" hreflang="en"/>
    <link rel="alternate" href="https://kryptokrona.org/faucet" hreflang="x-default"/>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<div class="wrapper">
    <div class="card">
        <p>Address:</p>
        <input id="claim" type="text" bind:value={inputValue}>
        <div class="g-recaptcha" data-sitekey="6LeuuboeAAAAALFj2PEADpIc2jZwLYQOa3R3iiCR" data-callback="captchaCallback"
             data-theme="dark"></div>
        <Button text="Claim" disabled={!enabled} enabled={enabled && captcha} on:click={() => submitForm()}/>
        <p id="status">{status}</p>
    </div>
</div>

<style lang="scss">

  .wrapper {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: 0.4rem;

    @media only screen and (max-width: 300px) {

    }

    p {
      max-width: 300px;
      font-size: 0.75rem;
      word-break: break-all;
    }
  }

  input {
    box-sizing: border-box;
    background-color: var(--backgound-color);
    border: 1px solid var(--border-color);
    border-radius: 0.4rem;
    color: var(--title-color);
    padding: 0 10px;
    height: 40px;
    width: 280px;
    margin-bottom: 40px;

    &:focus {
      outline: 1px solid var(--title-color);
      border: 1px solid var(--title-color);
    }
  }

  .g-recaptcha {
    margin-bottom: 40px;
  }

</style>