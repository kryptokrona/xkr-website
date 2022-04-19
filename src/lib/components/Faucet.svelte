<script>
    import {onMount} from "svelte";

    let status
    let inputValue
    let captcha

    onMount(() => {
        fetch('https://blocksum.org/faucet/balance')
            .then(res => res.json())
            .then(data => {
                data.balance ? status = "Funds available 🥳" : status = 'No funds available 😭'
            })
    })


    const submitForm = () => {

        const value = {
            "address": inputValue,
            "captcha": captcha
        }
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
                    status =(`You've already claimed 🚨`)
                    document.getElementById('status').style.color = '#ff2f40'
                } else if (data.msg === "sent") {
                    status =(`Sent ✅ ${data.tx}`)
                    document.getElementById('status').style.color = '#2fff6a'
                } else if (data.msg === "error") {
                    status =(data.errorMsg)
                    document.getElementById('status').style.color = '#ff2f40'
                }

            })
    }

</script>

<input type="text" bind:value={inputValue}>
<button on:click={() => submitForm()}>Claim</button>
<p id="status">{status}</p>

<style lang="scss">

</style>