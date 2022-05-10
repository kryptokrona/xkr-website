<script>
    import { draw, blur } from 'svelte/transition'
    import {quadInOut} from "svelte/easing";
    import DownloadHugin from "$lib/components/DownloadHugin.svelte";
    import HuginApp from "../../lib/components/HuginApp.svelte";


</script>

<svelte:head>
    <title>Kryptokrona | Hugin</title>
    <meta name="description" content=""/>
</svelte:head>

<HuginApp/>


<style lang="scss">

.wrapper {
  box-sizing: border-box;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  gap: 40px;


  @media only screen and (max-width: 1040px) {
    flex-direction: column;
  }

  .hero {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1040px) {
      align-items: center;
    }
  }
}


    .text-wrapper {
      margin-top: 40px;
      max-width: 600px;

      @media only screen and (max-width: 600px) {
        max-width: 100%;
      }

      h1 {
        margin: 0;
      }
    }

    svg {
      width: 100%;
      max-width: 600px;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    }


.chat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}

.chat-bubble {
  background-color: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: 0.4rem;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  h3 {
    margin: 0;
  }
}
</style>