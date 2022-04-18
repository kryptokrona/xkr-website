<script>
import {BarLoader} from "svelte-loading-spinners";
import {fade} from "svelte/transition";
</script>

<div class="wrapper" out:fade>
    <BarLoader duration="1s" color="var(--green)"/>
</div>

<style lang="scss">
    .wrapper {
      position: fixed;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      background-color: var(--backgound-color);
    }
</style>