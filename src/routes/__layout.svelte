<script>
    import {onMount} from "svelte";
    import {state} from "$lib/stores/store.js";
    import LoadingScreen from "$lib/components/LoadingScreen.svelte";
    import Navbar from "$lib/components/navbar/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Popup from "$lib/components/Popup.svelte";

    //Global scss
    import '$lib/theme/global.scss'

    let ready
    let visited
    let showPopup = false

    onMount( () => {
        ready = true

        //Checks if it's a new visitor, and renders popup.
        visited = localStorage.getItem('visited')

        if(!visited) {
            localStorage.setItem('visited', 'true')
            setTimeout(() => {
                showPopup = true
            }, 4000)
        }
    });

    //If we're mounted we wait x (1 second) amount of time to make sure fonts etc is ready. Looks good as well.
    $: {
        if (ready) {
            setInterval(() => {
                state.set({loading: false})
            }, 1000)
        }
    }

</script>

<!--Loading screen with animated logo-->
{#if $state.loading}
    <LoadingScreen/>
{/if}

<!--Popup, currently saying join discord to newVisitors-->
{#if showPopup}
    <Popup on:click={showPopup = false}/>
{/if}

<!--Layout with navbar and footer, slot is all the content being rendered in <main>, dont add a main tag elsewhere. -->
<Navbar/>
<main>
    {#if ready}
        <slot/>
    {/if}
</main>
<Footer/>

<style lang="scss">
/* We hande the website width and padding at top level */
  main {
    margin: 0 auto;
    max-width: var(--website-width);
    padding: 0 40px;
    box-sizing: border-box;
    width: 100%;
    transition: 250ms ease-in-out all;

    @media only screen and (max-width: 600px) {
      padding: 0 20px;
    }
  }

</style>
