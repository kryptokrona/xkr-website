<script>
    import {onMount} from "svelte";
    import {fade} from "svelte/transition";
    import {state} from "/src/lib/stores/state.js";
    import LoadingScreen from "/src/lib/components/LoadingScreen.svelte";
    import Navbar from "/src/lib/components/navbar/Navbar.svelte";
    import Footer from "/src/lib/components/Footer.svelte";
    import '$lib/theme/global.scss'

    let ready
    onMount(() => {
        ready = true
    });

    $: {
        if (ready) {
            setInterval(() => {
                state.set({loading: false})
            }, 1000)
        }
    }

</script>

{#if $state.loading}
    <LoadingScreen/>
{/if}

<Navbar/>
<main in:fade>
    {#if ready}
        <slot/>
    {/if}
</main>
<Footer/>

<style lang="scss">

  main {
    margin: 0 auto;
    max-width: var(--website-width);
    padding: 0 40px;
    box-sizing: border-box;
    margin-top: 150px;
    width: 100%;
    transition: 250ms ease-in-out all;

    @media only screen and (max-width: 600px) {
      padding: 0 20px;
    }

    @media only screen and (max-width: 700px) {
      margin-top: 100px;
    }
  }

</style>
